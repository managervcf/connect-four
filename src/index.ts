import { Game } from './game';
import { DumbAIPlayer, HumanPlayer } from './players';
import { ColorPrinter, BasicPrinter } from './printers';
import { chooseGameMode } from './utils';

async function main(): Promise<void> {
  // Choose the game mode.
  const mode = await chooseGameMode();

  // Create human and computer players.
  const humanPlayer = new HumanPlayer();
  const aiPlayer = new DumbAIPlayer();

  // Create a printer. Use the one you like (colorPrinter is much nicer).
  const basicPrinter = new BasicPrinter();
  const colorPrinter = new ColorPrinter();

  // Create a game, passing players and a printer.
  const game = new Game(humanPlayer, aiPlayer, mode, colorPrinter);

  // Start the game.
  game.start();
}

main();
