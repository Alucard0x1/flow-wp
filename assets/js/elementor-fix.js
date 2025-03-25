/**
 * Flow Theme - Fix for Elementor mobile mode switching back to desktop
 */
(function($) {
    'use strict';

    // Wait for both jQuery and Elementor to be available
    function initElementorFix() {
        if (typeof elementor === 'undefined' || typeof elementorFrontendConfig === 'undefined') {
            console.log('Flow theme: Waiting for Elementor to initialize...');
            setTimeout(initElementorFix, 100);
            return;
        }

        // Override the device mode change handler
        var originalChangeDeviceMode = elementor.changeDeviceMode;
        elementor.changeDeviceMode = function(newDeviceMode) {
            console.log('Flow theme: Device mode changing to', newDeviceMode);
            
            // Don't allow switching from mobile to desktop automatically
            if (elementor.channels.deviceMode.request('currentMode') === 'mobile' && 
                newDeviceMode === 'desktop' &&
                !elementor.channels.deviceMode._events['change:preview']?.[0]?.callback?.isManualSwitch) {
                console.log('Flow theme: Preventing automatic switch from mobile mode');
                return;
            }

            // Call original function for all other cases
            originalChangeDeviceMode.apply(this, arguments);
        };

        elementor.on('preview:loaded', function() {
            // Fix for mobile mode switching to desktop automatically
            var originalSetMode = elementor.settings.page.model.setExternalChange;
            
            elementor.settings.page.model.setExternalChange = function(key, value) {
                // If trying to change responsive mode and we're in mobile mode
                if (key === 'default_responsive_mode' && 
                    elementor.channels.deviceMode.request('currentMode') === 'mobile') {
                    console.log('Flow theme: Preventing automatic switch from mobile mode');
                    return; // Prevent the change
                }
                
                // For all other changes, use the original function
                originalSetMode.apply(this, arguments);
            };

            // Add CSS fixes
            var customCSS = `
                .elementor-device-mode-disabled {
                    pointer-events: auto !important;
                }
                body:not(.elementor-device-desktop) #elementor-preview {
                    overflow-y: visible !important;
                }
                .elementor-responsive-bar {
                    z-index: 100000;
                }
                .elementor-device-mobile #elementor-preview {
                    overflow: visible !important;
                }
            `;
            
            if (!$('#flow-elementor-fix-css').length) {
                $('<style id="flow-elementor-fix-css">').text(customCSS).appendTo('head');
            }

            // Force proper template loading in preview
            if (elementor.previewView && elementor.previewView.$el) {
                elementor.previewView.$el.addClass('elementor-template-full-width');
            }
        });

        // Handle device mode changes
        elementor.channels.deviceMode.on('change:preview', function(view) {
            view.callback.isManualSwitch = true;
            setTimeout(function() {
                delete view.callback.isManualSwitch;
            }, 100);
        });
    }

    // Initialize when frontend is ready
    $(window).on('elementor/frontend/init', function() {
        initElementorFix();
    });

    // Fallback initialization if the event hasn't fired yet
    if (typeof elementor !== 'undefined') {
        initElementorFix();
    }
})(jQuery); 