export const loadImage = (imageSRC) => {
	const img = new Image();
	img.src = imageSRC;

	return img;
}