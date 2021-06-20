import { BasePlayer } from './';
import { PlayerType } from '../types';

export class DumbAIPlayer extends BasePlayer {
  readonly type = PlayerType.AI;
  readonly name = 'Dumb AI';

  /**
   * Makes a move based on available columns.
   */
  public async move(availableColumns: number[]): Promise<number> {
    // Pick a random column.
    const randomIndex = Math.floor(Math.random() * availableColumns.length);
    const column = availableColumns[randomIndex];

    return new Promise((resolve, _reject) => resolve(column));
  }
}
