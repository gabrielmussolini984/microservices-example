import prisma from "@config/lib/prisma";
import { IOrderedDTO } from "@modules/Ordered/dto/IOrderedDTO";
import { IOrderedRepository } from "@modules/Ordered/repository/IOrderedRepository";

export class OrderedRepository implements IOrderedRepository {
  public async create(data: IOrderedDTO): Promise<IOrderedDTO> {
    return prisma.ordered.create({
      data,
    });
  }
  public async findAll(): Promise<IOrderedDTO[]> {
    return prisma.ordered.findMany();
  }
  public async findOne(id: number): Promise<IOrderedDTO | null> {
    return prisma.ordered.findUnique({
      where: {
        id,
      },
    });
  }
  public async remove(id: number): Promise<IOrderedDTO> {
    return prisma.ordered.delete({
      where: {
        id,
      },
    });
  }
}
