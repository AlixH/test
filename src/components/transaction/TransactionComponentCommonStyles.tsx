import deepmerge from 'deepmerge';
import ResponsiveStylesheet from 'react-native-responsive-stylesheet'
import { ScaledSheet } from 'react-native-size-matters';

import commonColor from '../../custom-theme/customCommonColor';

export default function computeStyleSheet(): any {
  const commonStyles = ScaledSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      borderBottomWidth: 1,
      borderBottomColor: commonColor.listBorderColor
    },
    transactionContent: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      borderBottomWidth: 1,
      borderBottomColor: commonColor.listBorderColor,
      paddingLeft: '5@s',
      paddingRight: '5@s',
      height: '80@s',
      width: '100%'
    },
    label: {
      color: commonColor.textColor,
      fontSize: '10@s',
      marginTop: '-3@s'
    },
    info: {
      color: commonColor.textColor,
    },
    success: {
      color: commonColor.brandSuccess
    },
    warning: {
      color: commonColor.brandWarning
    },
    danger: {
      color: commonColor.brandDanger
    },
    columnContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '60@s'
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      color: commonColor.textColor,
      fontSize: '30@s',
      justifyContent: 'flex-end'
    },
    labelValue: {
      fontSize: '15@s',
      color: commonColor.textColor,
    },
    subLabelValue: {
      fontSize: '10@s',
      color: commonColor.textColor,
    }
  });
  const portraitStyles = {};
  const landscapeStyles = {};
  return ResponsiveStylesheet.createOriented({
    landscape: deepmerge(commonStyles, landscapeStyles),
    portrait: deepmerge(commonStyles, portraitStyles)
  });
}
