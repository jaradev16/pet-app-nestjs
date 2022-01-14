import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './services/posts.service';

describe('PostsController', () => {
  let controller: PostsController;

  const mockUserService = {
    create: jest.fn(dto => {
      return {
        id: Date.now(),
        ...dto
      }
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService],
    }).overrideProvider(PostsService).useValue(mockUserService).compile();

    controller = module.get<PostsController>(PostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  it('should create a post', async () => {
    const dto = { title: 'Test Title',
                  description: 'Test',
                  content: "test content" };
    expect(controller.create(dto)).toEqual({
      id: expect.any(Number),
      title: dto.title,
      description: dto.description,
      content: dto.content
    });
    expect(mockUserService.create).toHaveBeenCalledWith(dto)



  });




});
