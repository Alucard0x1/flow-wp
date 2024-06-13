const Generator = require('yeoman-generator')
const { kebabCase } = require('lodash')

export default class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of your block (e.g. "TwoImages"):'
            }
        ]).then((answers) => {
            this.answers = answers
            this.answers.kebabCaseName = kebabCase(this.answers.name)
        })
    }

    writing() {
        console.log(this.answers)

        this.destinationRoot(`${this.contextRoot}/src/scripts/blocks/${this.answers.name}`)
        this.fs.copyTpl(
            this.templatePath(`blocks/block.jsx`),
            this.destinationPath(`${this.answers.name}.jsx`),
            this.answers,
        )

        this.fs.copyTpl(
            this.templatePath(`blocks/block.scss`),
            this.destinationPath(`${this.answers.name}.scss`),
            this.answers,
        )

        this.fs.copyTpl(
            this.templatePath(`blocks/block.script.js`),
            this.destinationPath(`${this.answers.name}.script.js`),
            this.answers,
        )
    }
}
