import { createClient } from "@supabase/supabase-js";

let url = "https://qdigycvbjdffqdpmdfpp.supabase.co";
let key =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkaWd5Y3ZiamRmZnFkcG1kZnBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NDA4NTEsImV4cCI6MjA5MDQxNjg1MX0.IQHqTHPavRxhHl4pHX25P0tY6IpWbuFB1h217Yba8Ig";
const supabase = createClient(url, key);

export default function uploadMedia(file) {
	return new Promise((resolve, reject) => {
		if (file == null) {
			reject("No file selected");
		} else {
			const timeStamp = new Date().getTime();
			const fileName = timeStamp + "_" + file.name;

			supabase.storage
				.from("images").upload(fileName, file, {
					upsert: false,
					cacheControl: "3600",
				}).then(() => {

					const publicUrl = supabase.storage
						.from("images")
						.getPublicUrl(fileName).data.publicUrl;

					resolve(publicUrl);
				})
				.catch((error) => {
					reject(error);
				});
		}
	});
}
