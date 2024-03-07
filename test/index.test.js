const assert = require('assert');
const { loadImage } = require('../src/imageLoadingUtilities');

describe('Image Loading Utilities', () => {
  describe('#loadImage()', () => {
    it('should load the image successfully', async () => {
      const imageUrl = 'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg';
      const image = await loadImage(imageUrl);
      assert.strictEqual(image.complete, true);
    });

    it('should reject with an error for invalid image URL', async () => {
      const invalidUrl = 'https://example.com/nonexistent.jpg';
      await assert.rejects(loadImage(invalidUrl), { message: 'Failed to load image' });
    });
  });
});
