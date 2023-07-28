import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from 'src/dtos/board.dto';
import { SessionInterceptor } from 'src/interceptors/board.interceptor';
import { CurrentUserInterceptor } from 'src/interceptors/user.interceptor';
import { CurrentUserId } from 'src/decorators/user.decorator';

/**
 * check to find a currentUser
 *  else, @throws error from the interceptor
 */

@UseInterceptors(CurrentUserInterceptor, SessionInterceptor)
@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}
  @Get()
  async root(): Promise<any> {
    const getBoards = this.boardService.findAll();
    return getBoards;
  }

  @Post('create')
  async createBoard(
    @CurrentUserId() id: number,
    @Body() params: CreateBoardDto,
  ) {
    return this.boardService.createBoard(Number(id), params);
  }
}
