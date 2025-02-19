import React from 'react';

import {
  EuiText,
  EuiCode,
  EuiSpacer,
  EuiIcon,
  EuiTextColor,
  EuiCodeBlock,
} from '../../../../src/components';

const longLink =
  'http://www.hithereimalongurl.com/dave_will_just_ramble_on_in_a_long_sentence_like_this/?ok=cool';

const wrappingExampleStyle = {
  width: 290,
  padding: 16,
  background: 'rgba(254, 228, 181, 0.5)',
};

export default () => (
  <EuiText>
    <h4>Display</h4>

    <EuiCode className="eui-displayBlock">.eui-displayBlock</EuiCode>

    <EuiSpacer />

    <EuiCode className="eui-displayInline">.eui-displayInline</EuiCode>

    <EuiSpacer />

    <EuiCode className="eui-displayInlineBlock">
      .eui-displayInlineBlock
    </EuiCode>

    <EuiSpacer />

    <EuiCode className="eui-fullWidth">
      .eui-fullWidth (similar to eui-displayBlock but adds 100% width)
    </EuiCode>

    <EuiSpacer />

    <h4>Text</h4>

    <EuiSpacer />

    <EuiTextColor color="danger">
      <EuiCode className="eui-textInheritColor">.eui-textInheritColor</EuiCode>{' '}
      will force text to inherit its color from its parent.
    </EuiTextColor>

    <EuiSpacer />

    <div className="eui-textLeft">
      <EuiCode>.eui-textLeft</EuiCode>
    </div>

    <div className="eui-textCenter">
      <EuiCode>.eui-textCenter</EuiCode>
    </div>
    <div className="eui-textRight">
      <EuiCode>.eui-textRight</EuiCode>
    </div>

    <EuiSpacer />

    <EuiSpacer />

    <div style={wrappingExampleStyle} className="eui-textNoWrap">
      <EuiCode>.eui-textNoWrap</EuiCode> will force text not to wrap even in
      small containers.
    </div>

    <EuiSpacer />

    <div style={wrappingExampleStyle} className="eui-textTruncate">
      <EuiCode>.eui-textTruncate</EuiCode> will ellipsis after a certain point.
    </div>

    <EuiSpacer />

    <div style={wrappingExampleStyle} className="eui-textBreakWord">
      <EuiCode>.eui-textBreakWord</EuiCode> will only break up at the end of
      words. Long urls will still break {longLink}.
    </div>

    <EuiSpacer />

    <div style={wrappingExampleStyle} className="eui-textBreakAll">
      <EuiCode>.eui-textBreakAll</EuiCode> will break up anything. It is useful
      for long urls like {longLink}.
    </div>

    <EuiSpacer />

    <div
      style={wrappingExampleStyle}
      className="eui-textBreakWord eui-textBreakNormal">
      <EuiCode>.eui-textBreakNormal</EuiCode> revert back to not forcing word
      breaks. It is <strong>not</strong> useful for long urls like {longLink}.
    </div>

    <EuiSpacer />

    <h4>Overflows</h4>

    <div
      style={{
        height: 180,
        overflowY: 'hidden',
        background: wrappingExampleStyle.background,
      }}>
      <EuiText
        className="eui-yScrollWithShadows"
        size="s"
        style={{ padding: wrappingExampleStyle.padding }}>
        <p>
          The vertical utility requires a wrapping element to control the height
          with <EuiCode>overflow-y: hidden;</EuiCode> and the content to use the
          CSS utility class <EuiCode>.eui-yScrollWithShadows</EuiCode>.
        </p>
        <p>
          <b>Example:</b>
        </p>
        <EuiCodeBlock language="html" isCopyable paddingSize="s">
          {`<BodyContent style={{ height: 200, overflowY: 'hidden' }}>
  <BodyScroll className="eui-yScrollWithShadows" />
</BodyContent>`}
        </EuiCodeBlock>
      </EuiText>
    </div>

    <EuiSpacer />

    <div
      style={{
        ...wrappingExampleStyle,
        padding: 0,
      }}>
      <div
        className="eui-xScrollWithShadows"
        style={{ padding: wrappingExampleStyle.padding }}>
        <EuiText size="s" style={{ width: '150%' }}>
          <p>
            When using the horizontal utility{' '}
            <EuiCode>.eui-xScrollWithShadows</EuiCode>, you may want to add
            padding to the sides of your content so the mask doesn&apos;t
            overlay it.
          </p>
        </EuiText>
      </div>
    </div>

    <EuiSpacer />
    <h4>Vertical alignment</h4>
    <EuiSpacer />

    <div>
      <EuiIcon type="logoElasticStack" size="xxl" className="eui-alignTop" />
      <EuiCode>.eui-alignTop</EuiCode>
    </div>

    <EuiSpacer />

    <div>
      <EuiIcon type="logoElasticStack" size="xxl" className="eui-alignMiddle" />
      <EuiCode>.eui-alignMiddle</EuiCode>
    </div>

    <EuiSpacer />

    <div>
      <EuiIcon type="logoElasticStack" size="xxl" className="eui-alignBottom" />
      <EuiCode>.eui-alignBottom</EuiCode>
    </div>

    <EuiSpacer />

    <div>
      <EuiIcon
        type="logoElasticStack"
        size="xxl"
        className="eui-alignBaseline"
      />
      <EuiCode>.eui-alignBaseline</EuiCode>
    </div>

    <EuiSpacer />

    <h4>Responsive</h4>

    <EuiCode className="eui-hideFor--xs">.eui-hideFor--xs</EuiCode>
    <EuiSpacer />
    <EuiCode className="eui-hideFor--s">.eui-hideFor--s</EuiCode>
    <EuiSpacer />
    <EuiCode className="eui-hideFor--m">.eui-hideFor--m</EuiCode>
    <EuiSpacer />
    <EuiCode className="eui-hideFor--l">.eui-hideFor--l</EuiCode>
    <EuiSpacer />
    <EuiCode className="eui-hideFor--xl">.eui-hideFor--xl</EuiCode>

    <EuiSpacer />

    <EuiCode className="eui-showFor--xs">.eui-showFor--xs</EuiCode>
    <EuiSpacer />
    <EuiCode className="eui-showFor--s">.eui-showFor--s</EuiCode>
    <EuiSpacer />
    <EuiCode className="eui-showFor--m">.eui-showFor--m</EuiCode>
    <EuiSpacer />
    <EuiCode className="eui-showFor--l">.eui-showFor--l</EuiCode>
    <EuiSpacer />
    <EuiCode className="eui-showFor--xl">.eui-showFor--xl</EuiCode>
  </EuiText>
);
