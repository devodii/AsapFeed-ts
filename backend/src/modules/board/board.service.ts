import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/entities/board.entity';
import { User } from 'src/entities/user.entity';
import { CreateBoardType } from 'src/utils/board.type';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board) private board: Repository<Board>,
    @InjectRepository(User) private user: Repository<User>,
  ) {}
  async getAll() {
    return `All the boards`;
  }

  async createBoard(id: number, params: CreateBoardType) {
    const [user]: any = await this.user.findBy({ id });
    if (!user) {
      throw new ForbiddenException('No user found,  cant create board');
    }
    const board = this.board.create(params);
    board.user = user;
    return this.board.save(board);
  }

  async findAll() {
    return this.board.find();
  }
}
