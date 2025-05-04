export function convertFileToBase64(file: File): Promise<string | null> {
	return new Promise((resolve, reject) => {
		try {
			const reader = new FileReader();

			reader.onerror = reject;

			reader.onloadend = () => {
				const fileAsBase64: string = reader.result as string;
				resolve(fileAsBase64);
			};

			reader.readAsDataURL(file);
		} catch (error: any) {
			console.error("Erro ao converter arquivo para base64: ", error);
			reject(null);
		}
	});
}