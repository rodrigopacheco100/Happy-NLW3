import Image from '../model/Image';

const baseUrl = 'http://localhost:3333/uploads/';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `${baseUrl}${image.path}`,
    };
  },
  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  },
};
