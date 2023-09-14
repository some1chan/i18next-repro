import i18next from "i18next";

await i18next.init({
	lng: "en",
	debug: false,
	resources: {
		en: {
			translation: {
				key_zero: "zero",
				key_one: "singular",
				key_two: "two",
				key_few: "few",
				key_many: "many",
				key_other: "other",
			},
		},
	},
});

console.log(i18next.t("key", { count: 0 }));   // -> "zero"
console.log(i18next.t("key", { count: 1 }));   // -> "singular"
console.log(i18next.t("key", { count: 2 }));   // Should output "two", outputs "other"
console.log(i18next.t("key", { count: 3 }));   // Should output "few", outputs "other"
console.log(i18next.t("key", { count: 4 }));   // Should output "few", outputs "other"
console.log(i18next.t("key", { count: 5 }));   // Should output "few", outputs "other"
console.log(i18next.t("key", { count: 11 }));  // Should output "many", outputs "other"
console.log(i18next.t("key", { count: 99 }));  // Should output "many", outputs "other"
console.log(i18next.t("key", { count: 100 })); // -> "other"
