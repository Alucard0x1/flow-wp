/**
 * Flow Theme - Fix for Elementor mobile mode switching back to desktop
 */
(function($) {
    'use strict';

    // Wait for both jQuery and Elementor to be available
    var initAttempts = 0;
    var maxAttempts = 50; // Maximum number of attempts (5 seconds total)
    
    function initElementorFix() {
        // Check if we've exceeded the maximum number of attempts
        if (initAttempts >= maxAttempts) {
            console.log('Flow theme: Elementor not detected after multiple attempts, stopping initialization');
            return;
        }
        
        initAttempts++;
        
        if (typeof elementor === 'undefined' || typeof elementorFrontendConfig === 'undefined') {
            console.log('Flow theme: Waiting for Elementor to initialize... (attempt ' + initAttempts + '/' + maxAttempts + ')');
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

            // Add CSS fixes with improved click handling
            var customCSS = `
                /* Improve click handling while maintaining functionality */
                .elementor-device-mode-disabled {
                    pointer-events: auto !important;
                }
                body:not(.elementor-device-desktop) #elementor-preview {
                    overflow-y: auto !important;
                }
                .elementor-responsive-bar {
                    z-index: 100000;
                    pointer-events: auto !important;
                }
                .elementor-device-mobile #elementor-preview {
                    overflow: auto !important;
                }
                /* Ensure elements remain clickable */
                .elementor-editor-active .elementor-element,
                .elementor-editor-active .elementor-element-overlay,
                .elementor-editor-active .elementor-widget-container {
                    pointer-events: auto !important;
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

        // Handle device mode changes with improved click handling
        elementor.channels.deviceMode.on('change:preview', function(view) {
            view.callback.isManualSwitch = true;
            
            // Ensure UI is responsive after device mode change
            setTimeout(function() {
                // Fix potential click issues after mode change
                $('.elementor-editor-active .elementor').css('pointer-events', 'auto');
                delete view.callback.isManualSwitch;
            }, 100);
        });
    }

    // Initialize when frontend is ready
    $(window).on('elementor/frontend/init', function() {
        initElementorFix();
        
        // Enhanced click handling fix for all levels of Elementor elements
        $(document).on('click', '.elementor-editor-active .elementor-element, .elementor-editor-active .elementor-element *', function(e) {
            // Ensure clicks are properly registered at all levels
            var $element = $(e.target).closest('.elementor-element');
            if ($element.length) {
                // Don't stop propagation immediately to allow natural bubbling
                
                // Force Elementor to recognize the click on deeply nested elements
                if (!$(e.target).is($element)) {
                    // Simulate a direct click on the element for better handling
                    setTimeout(function() {
                        $element.trigger('click');
                        // Also trigger the custom event for compatibility
                        $element.trigger('elementor:click');
                    }, 0);
                }
            }
        });
        
        // Add special handling for anchor links in Elementor content on the frontend
        $(document).on('click', 'a', function(e) {
            // Only process links that are not in the editor
            if (!$('body').hasClass('elementor-editor-active')) {
                // Ensure the link's default behavior works properly
                // This prevents any potential interference from Elementor's event handling
                e.stopPropagation();
                
                // Let the browser handle the link navigation naturally
                return true;
            }
        });
        
        // Additional fix for article links within Elementor content
        if (!$('body').hasClass('elementor-editor-active')) {
            // This runs only on the frontend, not in the editor
            // Ensure all links in the content area work correctly
            $('.elementor-widget-container a').on('click', function(e) {
                // Prevent any custom handlers from interfering
                e.stopPropagation();
                
                // Let the default link behavior work
                return true;
            });
        }

        
        // Handle custom elementor click events for better nested element support
        $(document).on('elementor:click', '.elementor-element', function(e) {
            // Custom handling for nested element clicks
            e.stopPropagation();
        });
    });

    // Fallback initialization if the event hasn't fired yet
    if (typeof elementor !== 'undefined') {
        initElementorFix();
    } else {
        // Check if we're on a page that uses Elementor
        var hasElementorContent = $('.elementor').length > 0;
        
        // If we have Elementor content but the elementor object isn't available,
        // we're likely on a frontend page with Elementor content
        if (hasElementorContent) {
            // Initialize frontend-only fixes for link handling
            // Enhanced link handling for all Elementor content on frontend
            $(document).on('click', '.elementor a, .elementor-widget-container a', function(e) {
                var href = $(this).attr('href');
                if (href && href !== '#' && !href.startsWith('javascript:')) {
                    // Ensure proper navigation between article pages
                    e.stopPropagation();
                    return true;
                }
            });
            
            console.log('Flow theme: Applied frontend-only fixes for Elementor content');
        } else {
            console.log('Flow theme: No Elementor content detected on this page');
        }
    }
})(jQuery);