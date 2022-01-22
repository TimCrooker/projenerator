import { logger } from 'swaglog'
import Choice from 'inquirer/lib/objects/choice'

export const exit = (): void => {
	logger.log('See ya next time there bud')
	return
}

export const ExitChoice = {
	name: 'Exit',
	value: 'exit',
} as Choice
