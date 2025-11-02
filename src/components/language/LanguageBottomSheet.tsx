import { s, vs } from "react-native-size-matters";
import { StyleSheet, Text, View } from "react-native";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import AppText from "../texts/AppText";
import AppButton from "../buttons/AppButton";
import RadioWithTitle from "../inputs/RadioWithTitle";
import { languagesArr } from "../../localization/LanguagesList";
import { useState } from "react";
import i18n from "../../localization/i18n";
import { useTranslation } from "react-i18next";

const LanguageBottomSheet = () => {
  const { t } = useTranslation();

  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const onLanguagePress = (code: string) => {
    setSelectedLang(code);
  };

  const handleConfirm = () => {
    SheetManager.hide("LANG_SHEET");
    i18n.changeLanguage(selectedLang);
  };

  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText style={styles.text}>{t("change_language")}</AppText>
        <View style={styles.textView}>
          {languagesArr.map((lang) => (
            <RadioWithTitle
              key={lang.code}
              title={lang.label}
              selected={selectedLang === lang.code}
              onPress={() => onLanguagePress(lang.code)}
            />
          ))}
        </View>

        <AppButton title={t("confirm")} onPress={handleConfirm} />
      </View>
    </ActionSheet>
  );
};

export default LanguageBottomSheet;
const styles = StyleSheet.create({
  container: {
    paddingVertical: vs(10),
    paddingHorizontal: vs(10),
    marginBottom: vs(30),
  },
  text: {
    textAlign: "center",
    paddingBottom: s(10),
    fontSize: s(18),
  },
  textView: {
    paddingBottom: s(10),
  },
});
