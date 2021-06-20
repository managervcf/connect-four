import { prompt, QuestionCollection } from 'inquirer';
import { BasePlayer } from './';
import { config } from '../config';
import { PlayerType, IColumnAnswer } from '../types';

export class HumanPlayer extends BasePlayer {
  readonly type = PlayerType.Human;
  readonly name = 'Human Player';

  /**
   * Makes a move based on available columns.
   */
  public async move(availableColumns: number[]): Promise<number> {
    // Prompt for a column number.
    const { column } = await prompt<IColumnAnswer>({
      ...config.columnNumberQuestion,
      choices: availableColumns.map(column => `${column}`),
    } as QuestionCollection<IColumnAnswer>);
    return column;
  }
}
