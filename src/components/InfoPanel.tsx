function InfoPanel() {
  return (
    <section className="info-panel" aria-labelledby="info-title">
      <div>
        <p className="section-label">Guide</p>
        <h2 id="info-title">計算の見方</h2>
      </div>
      <p>
        cm/180 は、視点を180度振り向かせるために必要なマウス移動距離です。
        このツールではゲームごとの yaw 係数を使い、同じ cm/180 になるよう通常感度を変換します。
      </p>
      <p>
        eDPI は DPI とゲーム内感度を掛けた値です。ただしゲームごとの yaw
        が異なるため、異なるゲーム間では eDPI だけで単純比較しないようにします。
      </p>
    </section>
  );
}

export default InfoPanel;
