import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Image from '../model/Image';
import Orphanage from '../model/Orphanage';

export default {
  async index(_: Request, response: Response): Promise<Response> {
    const orphanageRepository = getRepository(Orphanage);

    const orphanages = await orphanageRepository.find();

    return response.json(orphanages);
  },

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const orphanageRepository = getRepository(Orphanage);

    const orphanage = await orphanageRepository.findOne(id);

    if (!orphanage) return response.status(400).json();

    return response.json(orphanage);
  },

  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanageRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const orphanage = orphanageRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    await orphanageRepository.save(orphanage);

    return response.status(201).json(orphanage);
  },
};
