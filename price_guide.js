/* ティファニー メルカリ相場ガイド（生徒配布の価格表データ）
   タイトル照合・相場レンジ解析つき。ダッシュボードの相場表パネル＆狙い目判定に使う。 */
const SOBA = [
  // ── ネックレス ──
  {en:"Open Heart", jp:"オープンハート", cat:"necklace", price:"¥8,000〜10,000", point:"箱・保証書付きは高値になりやすい", img:"https://i.gyazo.com/c4cccec8766f19090142013d44d7db94.jpg"},
  {en:"Open Heart XS 11mm", jp:"オープンハート 11mm", cat:"necklace", price:"¥12,000〜15,000", point:"11mmは存在感ある定番", img:"https://i.gyazo.com/d04f9b5bef2f56cdc4d05644a662b145.jpg"},
  {en:"Open Heart XS 7mm", jp:"オープンハート 7mm", cat:"necklace", price:"¥18,000〜21,000", point:"小さいほど希少で高値", img:"https://i.gyazo.com/ac9eda7337ef86b9b789003fd44c0244.jpg"},
  {en:"Loving Heart", jp:"ラビングハート", cat:"necklace", price:"¥8,000〜10,000", point:"値崩れしにくい安定人気", img:"https://i.gyazo.com/a5284d501748475bfe54bc817698fc4f.jpg"},
  {en:"Full Heart", jp:"フルハート", cat:"necklace", price:"¥8,000〜10,000", point:"重ね付けコーデが人気", img:"https://i.gyazo.com/6782b8c59ac82dace1814f9c1773fc28.jpg"},
  {en:"Return to Tiffany Heart", jp:"リターントゥーハート", cat:"necklace", price:"¥8,000〜10,000", point:"流通量が多く相場安定", img:"https://i.gyazo.com/9ec26fd19bb6e495e437581b05281ed0.jpg"},
  {en:"RTT Heart Ball Chain", jp:"リターントゥーハート ボールチェーン", cat:"necklace", price:"¥16,000〜18,000", point:"チェーン種類で価格差", img:"https://i.gyazo.com/4bbd0bd83c0ddfde9871ccfc85187532.jpg"},
  {en:"RTT Blue Heart", jp:"ブルーハート", cat:"necklace", price:"¥23,000〜25,000", point:"エナメル剥がれで大幅値下がり", img:"https://i.gyazo.com/c4217ce70751e741c0977e7138650912.jpg"},
  {en:"Teardrop", jp:"ティアドロップ", cat:"necklace", price:"¥8,000〜10,000", point:"幅広い年齢層に人気", img:"https://i.gyazo.com/96f87b73064916cf24e160aab8b0e595.jpg"},
  {en:"Apple", jp:"アップル", cat:"necklace", price:"¥8,000〜10,000", point:"コレクターに人気", img:"https://i.gyazo.com/1c985347119f4d85883755f98fd73811.jpg"},
  {en:"Kiss", jp:"キス", cat:"necklace", price:"¥8,000〜10,000", point:"重ね付けしやすい", img:"https://i.gyazo.com/d29187dfb1c50eca7989de2c564790e9.jpg"},
  {en:"Bean", jp:"ビーンズ", cat:"necklace", price:"¥8,000〜10,000", point:"手に入れやすい定番", img:"https://i.gyazo.com/4d8bd671ea845b0a49caa5615c94cbc1.jpg"},
  {en:"Initial", jp:"イニシャル", cat:"necklace", price:"¥13,000〜15,000", point:"人気の文字は高値", img:"https://i.gyazo.com/ddc31deaf715d16c7d0f5a3542e878ed.jpg"},
  {en:"Infinity Cross", jp:"インフィニティクロス", cat:"necklace", price:"¥10,000〜12,000", point:"クロスの中でも人気", img:"https://i.gyazo.com/545f55f6f5db9581094bab4fd2bd6c3a.jpg"},
  {en:"Atlas Cube", jp:"アトラスキューブ", cat:"necklace", price:"¥10,000〜12,000", point:"珍しい立体デザイン", img:"https://i.gyazo.com/d17ca8f369577480170668e0afc849f3.jpg"},
  {en:"Open Leaf", jp:"オープンリーフ", cat:"necklace", price:"¥8,000〜10,000", point:"傷・変形に注意", img:"https://i.gyazo.com/40d1172e335494f50d09e2fe78fd4da3.jpg"},
  {en:"Penguin", jp:"ペンギン", cat:"necklace", price:"¥13,000〜15,000", point:"希少モチーフ", img:"https://i.gyazo.com/383db627f6f2cb468c8741d074c9b22a.jpg"},
  {en:"Cadena", jp:"カデナ", cat:"necklace", price:"¥16,000〜18,000", point:"キーチャームセットは高値", img:"https://i.gyazo.com/61fde3f6d0918c605426a61535af2739.jpg"},
  {en:"Infinity Narrow", jp:"インフィニティ 細め", cat:"necklace", price:"¥20,000", point:"細め上品", img:"https://i.gyazo.com/e70e1b3ef03ddf03e23f12b1bdc23a04.jpg"},
  {en:"Infinity Wide", jp:"インフィニティ 太め", cat:"necklace", price:"¥13,000〜15,000", point:"太めは流通多い", img:"https://i.gyazo.com/f6236bccbec873cb429841fb630e8c73.jpg"},
  {en:"Interlocking", jp:"インターロッキング", cat:"necklace", price:"¥16,000〜18,000", point:"ペア需要あり", img:"https://i.gyazo.com/f0ea8e9e99a9df8a7e08bf92e0c4d2bf.jpg"},
  {en:"Interlocking Triple", jp:"インターロッキング 3連", cat:"necklace", price:"¥18,000〜22,000", point:"通常より高値", img:"https://i.gyazo.com/b9562a1de11b25dacee5a65ac862b3c3.jpg"},
  {en:"Triple Star", jp:"トリプルスター", cat:"necklace", price:"¥10,000〜12,000", point:"流通量多い", img:"https://i.gyazo.com/1eb4b7e12ecc12406f00a46fa09f5509.jpg"},
  {en:"Signature Cross", jp:"シグネチャークロス", cat:"necklace", price:"¥10,000〜12,000", point:"シルバー単色が最多", img:"https://i.gyazo.com/4b9963932c675aec693b2898eb24bd55.jpg"},
  {en:"Sig Cross Combi X", jp:"シグネチャークロス コンビ X", cat:"necklace", price:"¥30,000〜33,000", point:"コンビは地金価値で高値", img:"https://i.gyazo.com/33a53fb0b8234f098c52fe4052858298.jpg"},
  {en:"Sig Cross Combi", jp:"シグネチャークロス コンビ", cat:"necklace", price:"¥36,000〜40,000", point:"コンビ最高値モデル", img:"https://i.gyazo.com/14019a76054e4370245ea5cecc444189.jpg"},
  {en:"Star of David", jp:"スターオブダビデ", cat:"necklace", price:"¥10,000〜12,000", point:"個性的デザイン", img:"https://i.gyazo.com/95f6fb546d6e5932f400757d40d10964.jpg"},
  {en:"Eternal Circle", jp:"エターナルサークル", cat:"necklace", price:"¥8,000〜10,000", point:"重ね付けベース向き", img:"https://i.gyazo.com/0af06bfb8fce608557559576ef28cf66.jpg"},
  // ── リング ──
  {en:"Open Heart Ring", jp:"オープンハート リング", cat:"ring", price:"¥8,000〜10,000", point:"セット出品は高値", img:"https://i.gyazo.com/790a2154387beb6f677292295075bf46.jpg"},
  {en:"Loving Heart Ring", jp:"ラビングハート リング", cat:"ring", price:"¥8,000〜10,000", point:"安定人気", img:"https://i.gyazo.com/1d5661359d560e6db3504d4422250cb5.jpg"},
  {en:"Triple Loving Heart Ring", jp:"トリプルラビングハート", cat:"ring", price:"¥8,000〜10,000", point:"ハート数多いほど人気", img:"https://i.gyazo.com/b0db5b3d488bfb8c8f7c7dfe26a95ef6.jpg"},
  {en:"Atlas Ring", jp:"アトラス リング", cat:"ring", price:"¥8,000〜10,000", point:"相場安定", img:"https://i.gyazo.com/a4e1a2c1a57b93e1f894cdd15c4643fa.jpg"},
  {en:"Teardrop Ring", jp:"ティアドロップ リング", cat:"ring", price:"¥8,000〜10,000", point:"重ね付け向き", img:"https://i.gyazo.com/15a36dd8af402f98f68eeeb1bf12a280.jpg"},
  {en:"Grooved Ring", jp:"グルーブド", cat:"ring", price:"¥8,000〜10,000", point:"重ね付けベース", img:"https://i.gyazo.com/05aa371fcddfbc9796ab5cef2972a5ba.jpg"},
  {en:"Narrow Ring", jp:"ナロー リング", cat:"ring", price:"¥8,000〜10,000", point:"重ね付け人気", img:"https://i.gyazo.com/aaab20dd2ef39aa6b45720cf1c7e99c6.jpg"},
  {en:"Hook & Eye Ring", jp:"フック＆アイ リング", cat:"ring", price:"¥22,000〜25,000", point:"状態良で高値", img:"https://i.gyazo.com/18b22c8efa29b6c24799165cbd1750ab.jpg"},
  {en:"Hook & Eye Double Ring", jp:"フック＆アイ ダブル", cat:"ring", price:"¥18,000〜22,000", point:"やや希少", img:"https://i.gyazo.com/a124dc1d08531d9eeb1c04d8dcf39a5f.jpg"},
  {en:"Love Knot Ring", jp:"ラブノット リング", cat:"ring", price:"¥18,000〜22,000", point:"ギフト需要高い", img:"https://i.gyazo.com/b5c35235490b9c9ae5f7864ec6fb6ea9.jpg"},
  {en:"Sig Cross Ring", jp:"シグネチャークロス リング", cat:"ring", price:"¥18,000〜22,000", point:"セット出品は高値", img:"https://i.gyazo.com/e5cfd0b978deeecda55e119b2e731694.jpg"},
  {en:"Heart Lock Combi Ring", jp:"ハートロック コンビ", cat:"ring", price:"¥30,000〜35,000", point:"コンビは高値", img:"https://i.gyazo.com/26996677408378a6becc9fad263ddab1.jpg"},
  {en:"Ribbon Heart Ring", jp:"リボンハート リング", cat:"ring", price:"¥16,000〜19,000", point:"傷の状態確認重要", img:"https://i.gyazo.com/f0f3be2250e98ec23ea743d7a6715a55.jpg"},
  {en:"Leaf Ring", jp:"リーフ リング", cat:"ring", price:"¥16,000〜19,000", point:"変形・傷注意", img:"https://i.gyazo.com/5ca4a9bb0bb022f4f1d1738b524ff10b.jpg"},
  {en:"Classic Band Ring", jp:"クラシックバンド", cat:"ring", price:"¥28,000〜33,000", point:"サイズ要確認", img:"https://i.gyazo.com/ec136a44eb59de4047ec5d9b8810f814.jpg"},
  {en:"Zigzag Ring", jp:"ジグザグ", cat:"ring", price:"¥20,000〜25,000", point:"コレクター人気", img:"https://i.gyazo.com/b668747adc22c072718c8b699c7ca5ab.jpg"},
  {en:"Interlocking Ring", jp:"インターロッキング リング", cat:"ring", price:"¥25,000〜30,000", point:"ペアリング需要", img:"https://i.gyazo.com/5c044911bc098c833b82f2b3e08c172d.jpg"},
  {en:"Somerset Ring", jp:"サマセット", cat:"ring", price:"¥22,000〜26,000", point:"傷が目立ちにくい", img:"https://i.gyazo.com/ef7d1b23af28f9eadbf307cde0cd59bc.jpg"},
  // ── ブレスレット ──
  {en:"Atlas Bangle", jp:"アトラス バングル", cat:"bracelet", price:"¥20,000〜23,000", point:"相場安定", img:"https://i.gyazo.com/ca13b4e7b804cffeaed9f26c827aa691.jpg"},
  {en:"Hook & Eye Bracelet", jp:"フック＆アイ ブレスレット", cat:"bracelet", price:"¥23,000〜26,000", point:"状態良で高値", img:"https://i.gyazo.com/f9ac2b2b962b3b0e076a785b50f5ff7e.jpg"},
  {en:"Hook & Eye Rare", jp:"フック＆アイ 希少", cat:"bracelet", price:"¥28,000〜30,000", point:"希少性高い", img:"https://i.gyazo.com/3e30da3ee7ba700b995c9c3f44489556.jpg"},
  {en:"Love Knot Bracelet", jp:"ラブノット ブレスレット", cat:"bracelet", price:"¥22,000〜25,000", point:"ギフト需要", img:"https://i.gyazo.com/0f74e0ca9570f7eac0a936c053df7598.jpg"},
  {en:"Heart Tag Bracelet", jp:"ハートタグ", cat:"bracelet", price:"¥23,000〜25,000", point:"刻印・状態が価格左右", img:"https://i.gyazo.com/931d664545c73021acdf9f5442abcec7.jpg"},
  {en:"RTT Heart Bracelet", jp:"リターントゥーハート ブレスレット", cat:"bracelet", price:"¥30,000〜33,000", point:"相場安定", img:"https://i.gyazo.com/a7dbf1f37eef471f7e7f0fabf87177dc.jpg"},
  {en:"Rope Double Heart", jp:"ロープ ダブルハート", cat:"bracelet", price:"¥30,000〜33,000", point:"絡まり・傷確認", img:"https://i.gyazo.com/0918e4fc5c90345816b4dce5a0d28918.jpg"},
  {en:"Rope Double Heart Combi", jp:"ロープ ダブルハート コンビ", cat:"bracelet", price:"¥50,000〜55,000", point:"コンビは高値", img:"https://i.gyazo.com/70d91be81f3dfbbf786d1174ed2999bf.jpg"},
  {en:"Ribbon Heart Bangle", jp:"リボンハート バングル", cat:"bracelet", price:"¥23,000〜26,000", point:"傷確認重要", img:"https://i.gyazo.com/f8adc100b7b1de9d33d3099638eb8d17.jpg"},
  {en:"Venetian", jp:"ベネチアン", cat:"bracelet", price:"¥22,000〜25,000", point:"チェーン状態が価格左右", img:"https://i.gyazo.com/f030ec2409bb096479f221787700880e.jpg"},
  {en:"ID Venetian", jp:"ID ベネチアン", cat:"bracelet", price:"¥30,000〜34,000", point:"刻印入りは値下がりも", img:"https://i.gyazo.com/9bd5e7080c822633151e92e97577a360.jpg"},
  // ── ピアス ──
  {en:"Triple Star Earrings", jp:"トリプルスター ピアス", cat:"earring", price:"¥12,000〜15,000", point:"流通量多い", img:"https://i.gyazo.com/68d1decfeb32e4fb45f6f3bc6722e398.jpg"},
  {en:"Loving Heart Earrings", jp:"ラビングハート ピアス", cat:"earring", price:"¥12,000〜15,000", point:"セット出品は高値", img:"https://i.gyazo.com/31159294d8939d33739254d9e68aca57.jpg"},
  {en:"Atlas Hoop Earrings", jp:"アトラス フープ ピアス", cat:"earring", price:"¥30,000〜34,000", point:"傷・変形確認", img:"https://i.gyazo.com/e9c6b39eeb8dc8157e09a0e9534b3cdf.jpg"},
  {en:"Bean Earrings", jp:"ビーンズ ピアス", cat:"earring", price:"¥16,000〜19,000", point:"セット出品は高値", img:"https://i.gyazo.com/65a896587d34c1dc90781606160dc74c.jpg"},
  {en:"Open Heart Earrings", jp:"オープンハート ピアス", cat:"earring", price:"¥12,000〜15,000", point:"セット出品は高値", img:"https://i.gyazo.com/51dc9c1f40e0460c0a582bc1e6be672d.jpg"},
  {en:"Narrow Bar Hook", jp:"ナローバー ピアス", cat:"earring", price:"¥18,000〜22,000", point:"フック変形注意", img:"https://i.gyazo.com/50d3d104ee39dfcd90e2091f6d8cd5d9.jpg"},
  {en:"Teardrop Hook Earrings", jp:"ティアドロップ ピアス", cat:"earring", price:"¥12,000〜15,000", point:"フック状態確認", img:"https://i.gyazo.com/5c8632e667dca911968b9935836cd8cc.jpg"},
  {en:"Bamboo Large Earrings", jp:"バンブー ラージ", cat:"earring", price:"¥48,000〜52,000", point:"変形・傷確認重要", img:"https://i.gyazo.com/29958780acb4fcf31c213e4c48632642.jpg"},
  {en:"Bamboo Small Earrings", jp:"バンブー スモール", cat:"earring", price:"¥80,000〜85,000", point:"希少で高値", img:"https://i.gyazo.com/8686911a2b1935cca7f177fb221c093e.jpg"},
  {en:"Full Heart Hook", jp:"フルハート ピアス", cat:"earring", price:"¥15,000〜17,000", point:"フック状態確認", img:"https://i.gyazo.com/712a959914593fa5689c99f43b17f2d5.jpg"},
  {en:"Kiss Earrings", jp:"キス ピアス", cat:"earring", price:"¥15,000〜19,000", point:"重ね付けしやすい", img:"https://i.gyazo.com/1ecee22b34bcf148893357cc847260e2.jpg"},
  {en:"Infinity Earrings", jp:"インフィニティ ピアス", cat:"earring", price:"¥18,000〜20,000", point:"セット出品は高値", img:"https://i.gyazo.com/5f9dfae6155bccb76a3b4af087ec83dd.jpg"},
  {en:"Narrow Hoop Earrings", jp:"ナロー フープ ピアス", cat:"earring", price:"¥35,000〜39,000", point:"変形・傷確認", img:"https://i.gyazo.com/45d83250b8198ec630247a8f598e5cfb.jpg"},
];

const CAT_LABEL = {necklace:"ネックレス", ring:"リング", bracelet:"ブレスレット", earring:"ピアス"};

// 相場文字列 → {min,max}
function sobaRange(s){
  const n = (s.match(/[\d,]+/g)||[]).map(x=>parseInt(x.replace(/,/g,""),10));
  if(!n.length) return null;
  return {min:n[0], max:n[n.length-1]};
}

// タイトルから最も具体的に一致する相場エントリを探す（号数があればリング優先）
// 暴発防止：一致した語の合計が4文字以上の「特徴的な一致」のみ採用（「キス」等2文字単独はマッチ無効）。
function matchSoba(title, hasSize){
  const t=(title||"").replace(/\s+/g,"");
  let best=null, bestLen=0;
  for(const e of SOBA){
    const words=e.jp.split(/\s+/).filter(Boolean);
    if(words.some(w=>w.length<2 || !t.includes(w))) continue;  // 全語含むものだけ
    const joinedLen=words.join("").length;
    if(joinedLen<4) continue;                                  // 短すぎる一致は無効（誤マッチ防止）
    const bonus=(hasSize && e.cat==="ring")?100:0;
    const score=joinedLen+bonus;
    if(score>bestLen){ bestLen=score; best=e; }
  }
  return best;
}
