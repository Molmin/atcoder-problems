##  目次 

[問題概要](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#gaiyou)<br>
[タイムスケジュールと空間構造](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#time-space)<br>
[ナノグリッド](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#nanogrid)<br>
[電力需給](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#yojou)<br>
[EV](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#ev)<br>
[ナノグリッドの蓄電池の充放電処理](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#charge)<br>
[採点方法](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#scoring)<br>
[問題文 A](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#problem)<br>
[入出力形式1](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#io-format1)<br>
[入出力形式2](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#io-format2)<br>
[入出力形式3](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#io-format3)<br>
[入出力制約](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#constraints)<br>
[入出力例](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#example)<br>
[サンプルコード A](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#sample)<br>

 問題概要 

この問題では、点在するナノグリッド(発電、蓄電、消費が行われる)における電力が不足しないよう、複数台のEV(=電気自動車)を用いて蓄電量のバランスを保つことを考える。EVは走行距離に応じて電気を消費するため、ナノグリッドから充電する必要がある。ナノグリッドでは太陽光や燃料エンジンによる発電、電力の消費およびEVへの充電が行われており、それらにより時間変動する電力需給を蓄電池の充放電および必要があれば外部からの電力供給によりバランスしている。

![](https://img.atcoder.jp/hokudai-hitachi2020/66636623acc04d65e9aed9bacf5f9d34.png)

<span style="color:red;font-weight:bold;">本ページ下部からダウンロード可能なtoolkitには、ジャッジからのデータ読込などI/O周りを既に実装したサンプルコードを用意しています。また、EVの動作も"all stay", "random walk"をサンプルとして実装済です。新しいアルゴリズムを実装する際も、strategy classを継承する形でEVの動作の記述に注力できるつくりになっています(詳しくはREADME.mdもご参照ください)。投稿の際、こちらをご活用いただいて構いません。</span>

 タイムスケジュールと空間構造 

- **タイムスケジュール**: 1つのテストケースは $1$ 営業日分に相当する。時刻 $t$ は $0$ から $T_{\max}$ までの整数の値をとる。各テストケースで天候が $4$ パターンのいずれかから $1$ つランダムに割り当てられ、電力需給に影響を及ぼす。コンテスタントはテストケース開始時に全時刻分の予測電力需給の情報を受け取る。また各時刻 $t$ において、各ナノグリッドの蓄電量と、前時刻 $t-1$ における実際の電力需給、余剰で捨てた電力、外部からの供給電力を受け取る。これらの情報を基に、コンテスタントは時刻 $t$ から $t+1$ の間に実行するEVの動作(移動、充放電など) を決定する。
- **空間構造**: 単純かつ無向であるグラフ $G = (V, E)$ を考える。ここで $V$ は頂点集合、$E$ は辺集合である。EVの移動や充放電は全てこのグラフ内で行われる。頂点のうち一定数はナノグリッドに対応する。また、辺は道路に対応し、各辺には正の整数で重み(距離)が定められている。地図を表すグラフは、後述のアルゴリズムによってランダムに生成される。

 グラフ $G$ の生成について 

全てのテストケースにおいてグラフ $G = (V, E)$ は以下のアルゴリズムによって生成される。

- **入力:**$|V|$, $|E|$, $\mathrm{MaxDegree}=5$(最大次数)
- **頂点の生成方法:**
-   - はじめに、$|V| = R^{2} + r$ を満たす最大の非負整数$R$ を見つける（ただし、$r$ も非負整数とする）。
-   - 次に、$0 \leq x, y &amp;lt; R$ を満たす$xy$座標平面上の全ての格子点に対して、点 $(x, y)$ をプロットする。
-   - 各点の座標を $(x, y) \leftarrow (x + dx, y + dy)$ とずらす。ここで $dx, dy$ は $dx, dy \in [0, 1]$ を満たす一様ランダムな実数である。つまり、移動後の座標は$(x + dx, y + dy)\in [0,R] \times [0,R]$を満たす。
-   - 残りの $r$ 個の点それぞれについて、座標 $(x', y')$ ($0 \leq x', y' \leq R$ の一様ランダムな実数) を定めてプロットする。
-   - 各点に対して、$1$から$|V|$までの番号(ID)をランダムに割り振る。
- **連結性の保証:**
-   - 生成した頂点集合 $u \in V$ に対して、完全グラフ $G_{\text{comp}}$ を生成する。各頂点ペア $u, v \in V \times V$ に対する頂点間のユークリッド距離を、完全グラフにおける辺の重み $W_{u, v}$ と定める。
-   - 次に、完全グラフ $G_{\text{comp}}$ に対して、[最小全域木](https://ja.wikipedia.org/wiki/%E5%85%A8%E5%9F%9F%E6%9C%A8#%E6%9C%80%E5%B0%8F%E5%85%A8%E5%9F%9F%E6%9C%A8) を生成し、生成された $|V|-1$ 本の辺を道路とする。これらの辺の重み $d_{u,v}$ を $d_{u,v} \leftarrow \lceil 2 \times W_{u, v} \rceil$と定める。
- **残りの道路の作成方法:**
-   - 残りの $|E|-(|V|-1)$ 本の道路は、次の手順で$1$本ずつ生成される。
  -   -   - $\mathrm{cost}(u,v)$を更新する。
-   -   - グラフGの辺でつながっていない$u$, $v$のペアの内、$\mathrm{cost(u,v)}$の最小を与えるペアをつなぐ辺$\left\{ u, v \right\}$をグラフGに加える。
-   -   - 選ばれた辺の重み $d_{u,v}$ を $d_{u,v} \leftarrow \lceil 2 \times W_{u, v} \rceil$ と定める。
-   - ここで $\mathrm{cost}(u,v)$ のベースは頂点間のユークリッド距離だが、低い次数の頂点が選ばれやすくなるように、また、できる限り道の交差を避けるため、斜め方向よりも縦横方向の道が選ばれやすくなるように $\mathrm{cost}(u,v)$ を定める。以下に $\mathrm{cost}(u,v)$ の計算方法の詳細を示す。
  -   -   - 各頂点 $u\in V$ の次数 $\mathrm{degree}(u)$ を計算する。次数 $\mathrm{degree}(u)$ は $u\in V$ をいずれかの端点に含むグラフ $G$ の辺の本数である。
-   -   - 各頂点 $u\in V$ の色を、頂点の初めの(ずらす前の)座標 $(x,y)$ をもとに、下記のように定める。まずは $|V|$ 個の頂点のうち、$R^{2}$ 個の頂点に対し、
    -   -   -   - $x+y$ が偶数の場合 : $\mathrm{color}(u) = 0$
-   -   -   - $x+y$ が奇数の場合 : $\mathrm{color}(u) = 1$
-   -   -   - と定める。残りの $r$ 個の頂点には、ランダムに$0$もしくは$1$の色を割り当てる。
-   -   - ファクター $f(u,v)$ を以下のように定める:
    -   -   -   - $\mathrm{color}(u)$ と $\mathrm{color}(v)$ が同じ場合： $\mathrm{f}(u,v) = 5$
-   -   -   - $\mathrm{color}(u)$ と $\mathrm{color}(v)$ が異なる場合： $\mathrm{f}(u,v) = 1$
-   -   - ファクター $g(u)$ を以下のように定める:
    -   -   -   - $\mathrm{degree}(u) \lt \mathrm{MaxDegree}$ の場合: $g(u)=1$
-   -   -   - $\mathrm{degree}(u) \geq \mathrm{MaxDegree}$ の場合: $g(u)=\infty$
-   -   - $\mathrm{cost}(u,v)$ を以下のように計算する。：
    -   -   -   - $\mathrm{cost}(u,v) = W_{u,v}\times \mathrm{degree}(u) \times \mathrm{degree}(v) \times f(u,v) \times g(u) \times g(v)$.
- ** ナノグリッド頂点の選択方法: **
  -   - 頂点集合 $u \in V$ の中から一様ランダムに $N_{\mathrm{grid}}$ 個の頂点を選択し、それらをナノグリッド頂点と定める。またナノグリッド頂点集合を $V_{\mathrm{grid}}$ と表す。

 ナノグリッド 

ナノグリッドは発電設備、電力消費者、EVの充放電設備および蓄電池から構成され、以下の内部状態を持つ。

- <p>**頂点ID**: 頂点 $u$ のID. ただし、$u \in V_{\mathrm{grid}}$ ($V_{\mathrm{grid}}$: ナノグリッド頂点集合, ("グラフ$G$ の生成について"を参照)) </p>
- <p>**蓄電量**: ナノグリッド内の蓄電池に蓄えられた電気の量。初期値 $C_{\mathrm{init}}^{\mathrm{grid}}$。上限値 $C_{\mathrm{max}}^{\mathrm{grid}}$ (初期値と上限値は全ナノグリッド共通)。各時刻 $t$ で電力需給(=発電-消費)の値だけ増減する。また、EVと蓄電池の間の充放電によっても増減する(詳細は**&lt;a href="#charge"&gt; ナノグリッドの蓄電池の充放電処理 &lt;/a&gt;**参照)。増加分が上限値 $C_{\mathrm{max}}^{\mathrm{grid}}$ を超える場合、次の時刻 $t+1$ の蓄電量は上限値となり、超えた分の電気は捨てられる。逆に蓄電量が足りなくなった場合、不足分はナノグリッドの外部(系統電力)から供給され、不足分に比例してスコアは減点される(詳細は**&lt;a href="#scoring"&gt;採点方法&lt;/a&gt;**参照)。</p>
- <p>**電力需給**: 各時刻におけるナノグリッド内の発電量とEVへの充電及び蓄電池への蓄電量を除いた消費量の差であり、その各時刻における予測値が時系列データで各テストケース開始時にコンテスタントに与えられる。実際の電力状態はその予測値と確率的部分（ゆらぎ、ゲリラ豪雨or想定外の晴れ）の和になる(詳細は**&lt;a href="#yojou"&gt;電力需給&lt;/a&gt;**参照)。</p>
- <p>**上限充放電速度**: $V_{\max}^{\mathrm{grid}}$. ナノグリッド内の蓄電池への充放電速度の上限値(全ナノグリッド共通)</p>

 電力需給 

各時刻におけるナノグリッド内の発電量とEVへの充電及び蓄電池への蓄電量を除いた消費量の差である。

- <p>**電力需給のパターン**: 1つのテストケースは $1$ 営業日分($0 \leq t &lt; T_{\max}$)に対応する。テストケース開始時に、その日の天候が晴(ゲリラ豪雨無し)、晴(ゲリラ豪雨有り)、雨(想定外の晴れ無し)、雨(想定外の晴れ有り)の $4$ 種類から選ばれ、コンテスタントに通知される。天候によってナノグリッド内の発電量（太陽光発電）が変化するため、予測電力需給の $1$ 営業日分の総和は晴れ(ゲリラ豪雨無し)の場合が最も多く、逆に雨(想定外の晴れ無し)の場合は最も少なくなる。各ナノグリッドには需要パターンの異なる $N_{\mathrm{pattern}}$ 種類の予測電力需給パターンから $1$ つがランダムに割り当てられ、どのパターンが割り当てられたかはコンテスタントに通知される。また、予測電力需給の各時刻の値は、テストケース開始時にコンテスタントに通知される。</p>
- <p>**電力需給の値**: 電力需給の値は予測電力需給と確率的な揺らぎ $\delta$ とゲリラ豪雨及び想定外の晴れによる変化量の和で表される。</p>
-   - **予想電力需給**: 時間 $0 \leq t &amp;lt; T_{\max}$ を $N_{\mathrm{div}}$ 等分の区間に分け、同一区間内で予測電力需給は一定とする。
-   - **確率的揺らぎ**: 各時刻 $t$ で予測電力需給に確率的な揺らぎ値 $\delta$ が加わる。$\delta$ は各時刻、各ナノグリッド独立に平均 $0$、分散 $\sigma^{2}_{\mathrm{ele}}$ の正規分布から生成され、その値はコンテスタントには事前に通知されない。
-   - **ゲリラ豪雨**:  天候が"晴(ゲリラ豪雨有り)"の場合、$N_{\mathrm{div}}$ つの各時間区間において $p_{\mathrm{event}}$ の確率でゲリラ豪雨が発生する。確率は時間区間ごと独立かつ一定である。ゲリラ豪雨が発生すると、その時間区間内の全時刻 $t$ で、時間区間ごと独立且つランダムに選ばれた $15\%$(端数切捨て)のナノグリッドの電力需給が $\Delta_{\mathrm{event}}$ だけ減少する(太陽光による発電量が想定よりも大幅に減少する)。
-   - **想定外の晴れ**: 天候が"雨(想定外の晴れ有り)"の場合、ゲリラ豪雨と同じ確率で想定外の晴れが発生する。想定外の晴れが発生すると、その時間区間内の全時刻 $t$ で、時間区間ごと独立且つランダムに選ばれた $15\%$(端数切捨て)のナノグリッドの電力需給が $\Delta_{\mathrm{event}}$ だけ増加する(太陽光による発電量が想定よりも大幅に増加する)。&lt;br&gt;
ゲリラ豪雨及び想定外の晴れの発生タイミングは事前にコンテスタントには通知されない。最終的な電力需給の値は、予測電力需給 $+ \delta \pm \Delta_{\mathrm{event}}$ となる。

![](https://img.atcoder.jp/hokudai-hitachi2020/17ff7de7687b964a3d7c9a4912257abe.png)

 EV 

コンテスタントは複数台のEVを操作し、ナノグリッド間の電力バランス調整を行う。

- <p>**台数**: EVの台数は、テストケースの開始時に区間 $[N_{\min}^{\mathrm{EV}}, N_{\max}^{\mathrm{EV}}]$ から一様ランダムに選ばれ、コンテスタントに通知される。</p>
- <p>**初期位置**: テストケース開始時にナノグリッド含む全ての頂点からEV台数に等しい数の頂点をランダムに選び、EVは選ばれた各頂点に $1$ 台ずつ配置される。</p>
- <p>**内部状態**: 各EVは以下の内部状態を持つ</p>
-   - ID $(0, 1,... , N^{\mathrm{EV}}-1)$
-   - 蓄電量 $C^{\mathrm{EV}}_{t}$ (非負整数, 初期値は $C^{\mathrm{EV}}_{t=0}$、上限値は $C^{\mathrm{EV}}_{\max}$ で共に全EV共通)
-   - 位置 (頂点上もしくは辺上)
-   - 上限充放電速度 $V_{\max}^{\mathrm{EV}}$ (EVの充放電速度の上限値 (全EV共通))
- <p>**動作**: コンテスタントは各時刻 $t$ における各EVの動作を以下から選び、決定する。</p>
-   - `stay`: 移動せずその場にとどまる。この場合、EVの蓄電量は消費されない。($C^{\mathrm{EV}}_{t+1}-C^{\mathrm{EV}}_{t}=0$)
-   - &lt;p&gt;`move w`: 頂点 $w \in V$ の方向に向かって距離 $1$ だけ進む。次の時刻のEVの蓄電量は $\Delta^{\mathrm{EV}}_{\mathrm{move}}$ だけ減少する。ただし、以下の条件を満たしており、且つ移動後のEVの蓄電量が負になる場合($C^{\mathrm{EV}}_{t} - \Delta^{\mathrm{EV}}_{\mathrm{move}} &amp;lt; 0$)、EVの蓄電量は減らず、`stay`が実行された場合と同じ挙動となる(その場に留まる)。&lt;/p&gt;
-   -   - `move w` を選択するとき、$w$ が以下の条件を満たさない場合、 `WA` (Wrong Answer) となる。-   -   -   - $w$ は $w \in V$ を満たす頂点である
-   -   -   - EVが頂点 $u \in V$ 上にいる場合、頂点対 $\left\{ u, w \right\}$ がグラフの辺集合に含まれていなければならない。すなわち、$\left\{ u, w \right\} \in E$ でなければならない
-   -   -   - EVが辺 $\left\{ u, v \right\}$ 上にいる場合、$w = u$ または $w = v$ でなければならない
-   - &lt;p&gt;`charge_from_grid` $\Delta^{\mathrm{grid} \rightarrow \mathrm{EV}}_{\mathrm{charge}}$: ナノグリッド上でEVへ $\Delta^{\mathrm{grid} \rightarrow \mathrm{EV}}_{\mathrm{charge}}$ だけ充電する。そのとき次の時刻 $t+1$ でのEVの蓄電量 $C^{\mathrm{EV}}_{t+1}$ は、$C^{\mathrm{EV}}_{t+1} \leftarrow C^{\mathrm{EV}}_{t} + \Delta^{\mathrm{grid} \rightarrow \mathrm{EV}}_{\mathrm{charge}}$ となる。同一ナノグリッドから複数台のEVに同時に充電することも可能である。また、同一ナノグリッド上で同時に別のEVからナノグリッドへ放電`charge_to_grid`することも可能である(動作は後述)。&lt;/p&gt;
-   -   - `charge_from_grid` $\Delta^{\mathrm{grid} \rightarrow \mathrm{EV}}_{\mathrm{charge}}$ を選択するとき、以下の条件を満たさない場合、`WA` (Wrong Answer) となる。-   -   -   - EVはナノグリッドの頂点 $u \in V_{\mathrm{grid}}$ に居る
-   -   -   - $\Delta^{\mathrm{grid} \rightarrow \mathrm{EV}}_{\mathrm{charge}}$は自然数である。
-   -   -   - EVの上限充放電速度を超えない: $\Delta^{\mathrm{grid} \rightarrow \mathrm{EV}}_{\mathrm{charge}} \leq V_{\max}^{\mathrm{EV}}$
-   -   -   - 充電後のEVの蓄電量が上限を超えない: $C^{\mathrm{EV}}_{t} + \Delta^{\mathrm{grid} \rightarrow \mathrm{EV}}_{\mathrm{charge}} \leq C^{\mathrm{EV}}_{\max}$
-   - &lt;p&gt;`charge_to_grid` $\Delta^{\mathrm{EV} \rightarrow \mathrm{grid}}_{\mathrm{charge}}$: EVからナノグリッドへ $\Delta^{\mathrm{EV} \rightarrow \mathrm{grid}}_{\mathrm{charge}}$ だけ放電する。そのとき次の時刻 $t+1$ でのEVの蓄電量 $C^{\mathrm{EV}}_{t+1}$ は、$C^{\mathrm{EV}}_{t+1} \leftarrow C^{\mathrm{EV}}_{t} - \Delta^{\mathrm{EV} \rightarrow \mathrm{grid}}_{\mathrm{charge}}$ となる。同一ナノグリッドへ複数台のEVから同時に放電することも可能である。また、同時に同一ナノグリッド上で別のEVへ充電`charge_from_grid`することも可能である。&lt;/p&gt;
-   -   - `charge_to_grid` $\Delta^{\mathrm{EV} \rightarrow \mathrm{grid}}_{\mathrm{charge}}$ を選択するとき、以下の条件を満たさない場合、`WA` (Wrong Answer) となる。-   -   -   - EVはナノグリッドの頂点 $u \in V_{\mathrm{grid}}$ に居る
-   -   -   - $\Delta^{\mathrm{EV} \rightarrow \mathrm{grid}}_{\mathrm{charge}}$は自然数である。
-   -   -   - EVの上限充放電速度を超えない: $\Delta^{\mathrm{EV} \rightarrow \mathrm{grid}}_{\mathrm{charge}} \leq V_{\max}^{\mathrm{EV}}$
-   -   -   - 放電後のEVの蓄電量が負にならない: $C^{\mathrm{EV}}_{t} - \Delta^{\mathrm{EV} \rightarrow \mathrm{grid}}_{\mathrm{charge}} \geq 0$

 ナノグリッドの蓄電池の充放電処理 

各ナノグリッドにおいて、発電量、消費量及び接続したEVの充放電によって時々刻々とナノグリッドの蓄電量は増減する。本処理により、各時刻各ナノグリッド内の電力需給(=発電量-消費量)とEVの充放電量を足し合わせ、余剰があればナノグリッド内の蓄電池に充電し、逆に足りなければ蓄電池から放電する。余剰が多い場合、蓄電池の上限充電速度を超える分、もしくは上限蓄電容量を超える分の電気は捨て、不足電力が多い場合、蓄電池の上限放電速度を超える分、もしくは蓄電量が枯渇しても足りない分の電気は、ナノグリッド外(系統)から購入する。いずれの場合も、コンテスタントが指定したEVの充放電量の分だけ、次の時刻で必ず充放電される。<br><br>
具体的には、各時刻 $t$ において、次の時刻 $t+1$ の各ナノグリッドの蓄電量を決定するため、以下の処理1～4が実行される。<br>

- <p>**処理1**: ナノグリッド内の時刻 $t$ における電力収支 $\Delta^{\mathrm{grid}}_{\mathrm{total}}$ を計算する<br>
$\Delta^{\mathrm{grid}}_{\mathrm{total}} = \Delta^{\mathrm{grid}}_{\mathrm{gen},t} - \sum_{i \in \mathrm{all EV}} \Delta^{\mathrm{grid} \rightarrow \mathrm{EV}i}_{\mathrm{charge},t} + \sum_{i \in \mathrm{all EV}} \Delta^{\mathrm{EV}i \rightarrow \mathrm{grid}}_{\mathrm{charge},t}$ <br>
ここで、各変数は以下の通りである。
    </p>-   - $\Delta^{\mathrm{grid}}_{\mathrm{gen},t}$: 時刻 $t$ における電力需給であり、予測電力需給 $\Delta^{\mathrm{grid,predict}}_{\mathrm{gen},t}$ と 確率的部分（ゆらぎ、ゲリラ豪雨or想定外の晴れ）の和である。ここで、予測電力需給の値はテストケースの開始時にコンテスタントに通知されるが、確率的部分は時刻 $t$ ではコンテスタントに通知されないことに注意せよ(ただし次の時刻 $t+1$ で $\Delta^{\mathrm{grid}}_{\mathrm{gen},t}$ がコンテスタントに通知される(詳しくは"入出力形式2"を参照))。
-   - $\Delta^{\mathrm{grid} \rightarrow \mathrm{EV}i}_{\mathrm{charge},t}$: ナノグリッドからEV$i$への充電量であり、コンテスタントが時刻 $t$ で指定する。
-   - $\Delta^{\mathrm{EV}i \rightarrow \mathrm{grid}}_{\mathrm{charge},t}$: EV$i$からナノグリッドへの放電量であり、コンテスタントが時刻 $t$ で指定する。
<p></p>
- <p>**処理2**: 電力収支が大きい、つまり余剰電力が大きい場合の処理。<br>
$\Delta^{\mathrm{grid}}_{\mathrm{total}} \geq \min \left\{ V_{\max}^{\mathrm{grid}}, C^{\mathrm{grid}}_{\max}-C^{\mathrm{grid}}_{t} \right\}$ の場合、次の時刻 $t+1$ のナノグリッドの蓄電量を以下のように定める。<br>
$C^{\mathrm{grid}}_{t+1} \leftarrow C^{\mathrm{grid}}_{t}+\min \left\{ V_{\max}^{\mathrm{grid}}, C^{\mathrm{grid}}_{\max}-C^{\mathrm{grid}}_{t} \right\}$<br>
つまり、速度や上限蓄電量を超えた分の電気は蓄電池に充電されない(捨てられることになる)。<br></p>
- <p>**処理3**: 電力収支が小さい、つまり不足電力が大きい場合の処理。<br>
$\Delta^{\mathrm{grid}}_{\mathrm{total}} &lt; - \min \left\{ V_{\max}^{\mathrm{grid}}, C^{\mathrm{grid}}_{t} \right\}$ の場合、次の時刻 $t+1$ のナノグリッドの蓄電量を以下のように定める。<br>
$C^{\mathrm{grid}}_{t+1} \leftarrow C^{\mathrm{grid}}_{t} - \min \left\{ V_{\max}^{\mathrm{grid}}, C^{\mathrm{grid}}_{t} \right\}$<br>
また、上記では、ナノグリッド内の電力不足分：<br>
$- \Delta^{\mathrm{grid}}_{\mathrm{total}} - \min \left\{ V_{\max}^{\mathrm{grid}}, C^{\mathrm{grid}}_{t} \right\}( &gt; 0)$<br>
をナノグリッド外(系統電力など)から購入する。そのため、不足分に比例してスコアが減点される(詳細は**&lt;a href="#scoring"&gt;採点方法&lt;/a&gt;**参照)。<br></p>
- <p>**処理4**: 電力収支が適度な大きさの場合の処理。<br>
処理2及び処理3が共に実行されない場合、電力収支の分だけ次の時刻 $t+1$ のナノグリッドの蓄電量を増減させる。<br>
$C^{\mathrm{grid}}_{t+1} \leftarrow C^{\mathrm{grid}}_{t} + \Delta^{\mathrm{grid}}_{\mathrm{total}}$<br></p>

![](https://img.atcoder.jp/hokudai-hitachi2020/21815e8b4102e7b828b2537a0dc95065.png)

 採点方法 

- <p>コンテスト開催中の順位は $16$ つのテストケースのスコアの合計値で決定する。$16$ つのテストケースのうち、晴(ゲリラ豪雨無し)、晴(ゲリラ豪雨有り)、雨(想定外の晴れ無し)、雨(想定外の晴れ有り)の数はそれぞれ $6, 2, 6, 2$ で固定である。</p>
- <p>各テストケースにおいて以下のようにスコアを計算する。<br>
$\mathrm{Score}=\sum_{i=1}^{N_{\mathrm{EV}}} C_{t=T_{\max}}^{\mathrm{EV}i} + \sum_{i=1}^{N_{\mathrm{grid}}} C_{t=T_{\max}}^{\mathrm{grid}i} - \gamma \sum_{t=0}^{T_{\max}-1} \sum_{i=1}^{N_{\mathrm{grid}}} L_{i,t} + 3000000$<br>
ただし、第 $1$ 項と第 $2$ 項は $t=T_{\max}$ 時点での全EV及び全ナノグリッドの残り蓄電量であり、$\gamma$ は不足電力ペナルティ係数、$L_{i,t}$ は時刻 $t$ のナノグリッド $i$ における不足電力であり、[ナノグリッドの蓄電池の充放電処理](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#charge)の処理3が実行された場合 $L_{i,t} = - \Delta^{\mathrm{grid}}_{\mathrm{total}} - \min \left\{ V_{\max}^{\mathrm{grid}}, C^{\mathrm{grid}}_{t} \right\}(L_{i,t} &gt; 0)$ であり、処理3が実行されない場合は $L_{i,t}=0$ である。</p>
- <p>システムテストは、ツールキットで開示済の $6(=N_\mathrm{pattern} \times 2($晴,雨$))$ パターンの予測電力需給パターンを用いた $160$ 個のテストケースに加えて、未開示の $6(=N_\mathrm{pattern} \times 2($晴,雨$))$ パターンの予測電力需給パターンを用いた $40$ 個のテストケースから成る、計 $200$ 個のテストケースで実施します。なお、ゆらぎの平均・分散値や、ゲリラ豪雨及び想定外の晴れによる電力需給の変動幅、発生確率及び発生条件は同じです。<br>
詳細な内訳は下記表をご覧ください* <br></p>

予測電力需給(開示済)
予測電力需給(未開示)
合計

晴(ゲリラ豪雨無)
60
15
75

晴(ゲリラ豪雨有)
20
5
25

雨(想定外の晴無)
60
15
75

雨(想定外の晴有)
20
5
25

合計
160
40
200

* 12/18にyuusanlondon様から頂いたご質問に対する回答から、システムテストの内容に一部変更が入ってしまい大変申し訳ありません。運営側で検討させて頂いた結果、上記の内容で最終順位を決定させて頂きたく、ご理解頂けますと幸いです。<br>
(12/29追記) 未開示の予測電力需給パターンの生成法やジェネレーターを開示する予定はございません。
ただし、未開示のパターンでの電力スコアの満点（理想的な制御実行時の得点の上限）は、開示済のパターンの電力スコアの満点と同等の得点となるよう、作成予定です。

 問題文 A 

問題 A は**インタラクティブな**問題である。
得点(Score)を最大化するように電力をマネジメントするアルゴリズムを作ることが問題 A のタスクである。
Contestantが高得点を獲得するためには、確率的に上下する電力需給に対して、蓄電池を持ちグラフ上を移動する電気自動車(EV)とナノグリッドとの間で必要に応じて充放電を行い、蓄電池を有するナノグリッドの蓄電量を管理することが必要となる。
作成するプログラムの得点判定の際は、コンテスタント側とジャッジ側が以下で示す流れに沿って処理を行う。

繰り返し処理
コンテスタント
ジャッジ

グラフ $G$ を出力

電力需給の情報を出力

ナノグリッドの情報を出力

EVの情報を出力

スコアの情報を出力

繰り返し処理(ターン)の回数 $T_\mathrm{max}$ を出力

**for** $t=0,...,T_\mathrm{max}-1$ **do**
-
-

時刻 $t$ におけるEVとナノグリッドの状態 $\mathrm{info}_t$ を出力

各EVに対して制御コマンドを出力

**end for**

時刻 $t=T_\mathrm{max}$ におけるEVとナノグリッドの状態 $\mathrm{info}_t$ を出力

スコア $\mathrm{Score}$ を出力

ジャッジによるグラフ、電力需給、ナノグリッド、EV、スコア、ターン数に関する情報は、はじめに$1$回だけ出力される。各試行で $0 \leq t \lt T_\mathrm{max}$ を満たす整数 $t$ において、表で示した順番通りに毎回行われる。なお、時刻 $t=T_\mathrm{max}$ における $\mathrm{info}_t$ 及びスコアは必ずコンテスタント側で読み出す必要がある(読み出さない場合TLEになる可能性がある)。

 入出力形式1 

はじめに、グラフ $G$、電力需給の情報、ナノグリッドの情報、EVの情報、スコアの情報およびターン数が、以下の形式によりジャッジから標準入力に与えられる。

```plain
$|V|$ $|E|$
$u_1$ $v_1$ $d_1$
:
$u_{|E|}$ $v_{|E|}$ $d_{|E|}$
$\mathrm{DayType}$
$N_\mathrm{div}$ $N_\mathrm{pattern}$ $\sigma^{2}_{\mathrm{ele}}$ $p_{\mathrm{event}}$ $\Delta_{\mathrm{event}}$
$\mathrm{pw}_{1,1}^{\mathrm{predict}}$ $\mathrm{pw}_{1,2}^{\mathrm{predict}}$ ... $\mathrm{pw}_{1,N_\mathrm{div}}^{\mathrm{predict}}$
:
$\mathrm{pw}_{N_\mathrm{pattern},1}^{\mathrm{predict}}$ $\mathrm{pw}_{N_\mathrm{pattern},2}^{\mathrm{predict}}$ ... $\mathrm{pw}_{N_\mathrm{pattern},N_\mathrm{div}}^{\mathrm{predict}}$
$N_\mathrm{grid}$ $C_{\mathrm{init}}^{\mathrm{grid}}$ $C_{\mathrm{max}}^{\mathrm{grid}}$ $V_{\max}^{\mathrm{grid}}$
$x_1$ $\mathrm{pattern}_1$ 
: 
$x_{N_\mathrm{grid}}$ $\mathrm{pattern}_{N_\mathrm{grid}}$ 
$N_\mathrm{EV}$ $C_{\mathrm{init}}^{\mathrm{EV}}$ $C_{\mathrm{max}}^{\mathrm{EV}}$ $V_{\max}^{\mathrm{EV}}$ $\Delta_{\mathrm{move}}^{\mathrm{EV}}$
$\mathrm{pos}_1$
:
$\mathrm{pos}_{N_\mathrm{EV}}$
$\gamma$
$T_\mathrm{max}$
```

- $1$ 行目の $|V|$ はグラフの頂点数、$|E|$ はグラフの辺数である。
- 続く $|E|$ 行で、グラフの辺が与えられる。 $|E|$ 行のうち $i$ 行目は、頂点 $u_{i}$ と $v_{i}$ の間に距離 $d_i$ の辺が存在することを表す。
- 続く $1$ 行で、天候タイプ $\mathrm{DayType}$ が与えられる。$\mathrm{DayType}$ は $0$: 晴(ゲリラ豪雨無し)、$1$: 晴(ゲリラ豪雨有り)、$2$: 雨(想定外の晴れ無し)、$3$: 雨(想定外の晴れ有り)のいずれかが与えられる。
- 続く $1$ 行で、予測電力需給が一定値となる区間の数 $N_\mathrm{div}$ と予測電力需給のパターン数 $N_\mathrm{pattern}$ と電力需給の分散 $\sigma^{2}_{\mathrm{ele}}$ とゲリラ豪雨もしくは想定外の晴れの発生確率 $p_{\mathrm{event}}$ (天候タイプが $0$ もしくは $2$ の場合は $0.0$ となる)とゲリラ豪雨もしくは想定外の晴れ発生時の電力需給の変化量 $\Delta_{\mathrm{event}}$ が与えられる。
- 続く $N_\mathrm{pattern}$ 行で各パターンの予測電力需給の値が与えられる。$i$ 行目の $j$ 番目の数値 $\mathrm{pw}_{i,j}^{\mathrm{predict}}$ は、予測電力需給パターン $i$ における時間区間 $j$ 番目の予測電力需給の値を表す。
- 続く $1$ 行で、ナノグリッドの個数 $N_\mathrm{grid}$ とナノグリッドの時刻 $0$ での蓄電量 $C_{\mathrm{init}}^{\mathrm{grid}}$ と最大蓄電量 $C_{\mathrm{max}}^{\mathrm{grid}}$ と蓄電池の上限充放電速度 $V_{\max}^{\mathrm{grid}}$ が与えられる。
- 続く $N_\mathrm{grid}$ 行でナノグリッドの情報が与えられる。$N_\mathrm{grid}$ 行のうち $i$ 行目は、頂点 $x_i$ 上に、予測電力需給パターン $\mathrm{pattern}_i$ のナノグリッドが存在することを表す。
- 続く $1$ 行で、EVの個数 $N_\mathrm{EV}$ とEVの時刻 $0$ での蓄電量 $C_{\mathrm{init}}^{\mathrm{EV}}$ と最大蓄電量 $C_{\mathrm{max}}^{\mathrm{EV}}$ と蓄電池の上限充放電速度 $V_{\max}^{\mathrm{EV}}$ と単位距離の移動に必要な電力 $\Delta_{\mathrm{move}}^{\mathrm{EV}}$ が与えられる。
- 続く $N_\mathrm{EV}$ 行で、EVの位置が与えられる。$N_\mathrm{EV}$ 行のうち $i$ 行目は、$i$ 番目のEVが頂点 $\mathrm{pos}_i$ 上にあることを表す。
- 続く $1$ 行で、不足電力ペナルティ係数 $\gamma$ が与えられる。
- 続く $1$ 行で、あなたが行動するターン数 $T_{\max}$ が与えられる。

 入出力形式2 

各時刻 $t$ に、その時刻におけるEVとナノグリッドの状態 $\mathrm{info}_t$ が、以下の形式によりジャッジから標準入力に与えられる。

```plain
$x_1$ $y_1$ $\mathrm{pw}_{1}^{\mathrm{actual},t-1}$ $\mathrm{pw}_{1}^{\mathrm{excess},t-1}$ $\mathrm{pw}_{1}^{\mathrm{buy},t-1}$
:
$x_{N_\mathrm{grid}}$ $y_{N_\mathrm{grid}}$ $\mathrm{pw}_{N_\mathrm{grid}}^{\mathrm{actual},t-1}$ $\mathrm{pw}_{N_\mathrm{grid}}^{\mathrm{excess},t-1}$ $\mathrm{pw}_{N_\mathrm{grid}}^{\mathrm{buy},t-1}$
$\mathrm{carinfo}_1$
:
$\mathrm{carinfo}_{N_\mathrm{EV}}$
```

- 始めの $N_\mathrm{grid}$ 行のうち $i$ 行目は、$x_i$ 上に存在するナノグリッドの蓄電量が $y_i$ であり、前時刻 $t-1$ における実際の電力需給、余って捨てられた電気の量、電力不足で系統から購入した電気の量がそれぞれ $\mathrm{pw}_{i}^{\mathrm{actual},t-1}$、$\mathrm{pw}_{i}^{\mathrm{excess},t-1}$、$\mathrm{pw}_{i}^{\mathrm{buy},t-1}$ であることを表す。ただし $t=0$ においては、 $\mathrm{pw}_{i}^{\mathrm{actual},t-1}$、$\mathrm{pw}_{i}^{\mathrm{excess},t-1}$、$\mathrm{pw}_{i}^{\mathrm{buy},t-1}$ はいずれも $0$ が表示されるものとする。<br>
補足: $\mathrm{pw}_{i}^{\mathrm{actual},t-1}$、$\mathrm{pw}_{i}^{\mathrm{excess},t-1}$、$\mathrm{pw}_{i}^{\mathrm{buy},t-1}$は、それぞれ [ナノグリッドの蓄電池の充放電処理](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#charge)"処理1"の $\Delta^{\mathrm{grid}}_{\mathrm{gen},t-1}$、"処理2"の"速度や上限蓄電量を超えた分の電気"$\Delta^{\mathrm{grid}}_{\mathrm{total},t-1} - \min \left\{ V_{\max}^{\mathrm{grid}}, C^{\mathrm{grid}}_{\max}-C^{\mathrm{grid}}_{t-1} \right\}$、"処理3"の"電力不足分" $- \Delta^{\mathrm{grid}}_{\mathrm{total},t-1} - \min \left\{ V_{\max}^{\mathrm{grid}}, C^{\mathrm{grid}}_{t-1} \right\}$ に対応する。ただし、前時刻 $t-1$ でそれぞれ"処理2"、"処理3"が実行されなかった場合、$\mathrm{pw}_{i}^{\mathrm{excess},t-1}$ と $\mathrm{pw}_{i}^{\mathrm{buy},t-1}$ はそれぞれ $0$ となる。
- 続く $N_\mathrm{EV}$ 項目はそれぞれ $3$ 行からなり、そのうち $i$ 項目目の $\mathrm{carinfo}_i$ は $i$ 番目のEVの状態を表す。$\mathrm{carinfo}_i$ はそれぞれ後述の形式で与えられる。

$i$ 番目のEVの状態を表す $\mathrm{carinfo}_i$ は、以下の形式で与えられる。

```plain
$\mathrm{charge}_i$
$u_i$ $v_i$ $\mathrm{dist\_from}\_u_i$ $\mathrm{dist\_to}\_v_i$
$N_{\mathrm{adj},i}$ $a_{i,1}$ $a_{i,2}$ $\ldots$ $a_{i,N_\mathrm{adj}}$
```

- 始めの $1$ 行目は、 $i$ 番目のEVの蓄電量が $\mathrm{charge}_i$ であることを表す。
- 続く $2$ 行目は、 $i$ 番目のEVの位置を表す。$u_i \ne v_i$ ならば、$i$ 番目のEVは頂点 $u_i$ と 頂点$v_i$ を結ぶ辺上に存在して頂点 $u_i$ から $\mathrm{dist\_from}\_u_i$、頂点 $v_i$ から $\mathrm{dist\_to}\_v_i$ の距離にあることを表す。$u_i = v_i$ ならば、$i$ 番目のEVはちょうど頂点 $u_i$ 上にあることを表し、$\mathrm{dist\_from}\_u_i$ と $\mathrm{dist\_to}\_v_i$ は共に $0$ が出力される。
- 続く $3$ 行目は、動作`move`で $i$ 番目のEVがその方向に移動可能な頂点が $N_{\mathrm{adj},i}$ 個存在し、それらが頂点 $a_{i,1}$、頂点 $a_{i,2}$、$\ldots$、頂点 $a_{i,N_\mathrm{adj}}$ であることを表す。

次に、コンテスタントは、時刻 $t$ ($0 \leq t \lt T_{\max}$) における各EVの動作 $\mathrm{command}_i$ $(1 \leq i \leq N_\mathrm{EV})$ を標準出力に出力しなければならない。各動作は改行で区切られなくてはならず、また末尾に改行を出力する必要がある。

```plain
$\mathrm{command}_{1}$
$\mathrm{command}_{2}$
:
$\mathrm{command}_{N_\mathrm{EV}}$
```

ここで、$\mathrm{command}$ は以下の形式でなければならない。

- `stay` を行う場合、`stay` と $1$ 行で出力
- `move w` を行う場合、`move w` と $1$ 行で出力
- `charge_from_grid` $\Delta^{\mathrm{grid} \rightarrow \mathrm{EV}}_{\mathrm{charge}}$ を行う場合、`charge_from_grid` $\Delta^{\mathrm{grid} \rightarrow \mathrm{EV}}_{\mathrm{charge}}$ と $1$ 行で出力
- `charge_to_grid` $\Delta^{\mathrm{EV} \rightarrow \mathrm{grid}}_{\mathrm{charge}}$ を行う場合、`charge_to_grid` $\Delta^{\mathrm{EV} \rightarrow \mathrm{grid}}_{\mathrm{charge}}$ と $1$ 行で出力

それぞれの動作には満たすべき条件が存在する(詳細は[EV](https://atcoder.jp/contests/hokudai-hitachi2020/tasks/hokudai_hitachi2020_a#ev)の"動作"の節を参照のこと)。それらの条件を満たさない場合の動作は未定義である。<br>

 入出力形式3 

コンテスタントが時刻 $t=T_\mathrm{max}-1$ における各EVの動作を標準出力に出力したのち、ジャッジから時刻 $t=T_\mathrm{max}$ におけるEVとナノグリッドの状態 $\mathrm{info}_t$ が標準入力に与えられる（$\mathrm{info}_t$ の形式は"入出力形式2"を参照）。引き続いて次の行にジャッジから以下の形式でスコア $\mathrm{Score}$ が標準入力に与えられる。

```plain
$\mathrm{Score}$
```

 入出力制約 

- 入力で与えられる数値のうち**"[小数]"**と記載されているものは小数で与えられ、その他のものは整数で与えられる。

### 初期化(入出力形式1)

- $|V| = 225$
- $1.5 |V| \leq |E| \leq 2 |V|$
- $1 \leq u_{i}, v_{i} \leq |V|, u_i \ne v_i$ $(1 \leq i \leq |E|)$
- $1 \leq d_i \leq \lceil 2\sqrt{2|V|} \rceil$ $(1 \leq i \leq |E|)$
- 与えられるグラフは自己ループ・多重辺が存在せず、連結であることが保証される。
- $\mathrm{DayType} \in \left\{ 0, 1, 2, 3 \right\}$
- $N_\mathrm{div} = 20$
- $N_\mathrm{pattern} = 3$
- $\sigma^{2}_{\mathrm{ele}} = 100$
- $p_{\mathrm{event}} \in \left\{ 0.0, 0.1 \right\}$ **"[小数]"**
- $\Delta_{\mathrm{event}} = 1000$
- $-1000 \lt \mathrm{pw}_{i,j}^{\mathrm{predict}} \lt 1000 (1 \leq i \leq N_\mathrm{pattern}, 1 \leq j \leq N_\mathrm{div})$
- $N_\mathrm{grid} = 20$
- $C_{\mathrm{init}}^{\mathrm{grid}} = 25000$
- $C_{\mathrm{max}}^{\mathrm{grid}} = 50000$
- $V_{\max}^{\mathrm{grid}} = 800$
- $1 \leq x_i \leq |V|$ $(i \neq j$ なら $x_i \neq x_j, 1 \leq i \leq N_\mathrm{grid})$
- $1 \leq \mathrm{pattern}_i \leq N_\mathrm{pattern}$  $(1 \leq i \leq N_\mathrm{grid})$
- $N_{\min}^{\mathrm{EV}} = 15$
- $N_{\max}^{\mathrm{EV}} = 25$
- $N_{\min}^{\mathrm{EV}} \leq N_\mathrm{EV} \leq N_{\max}^{\mathrm{EV}}$
- $C_{\mathrm{init}}^{\mathrm{EV}} = 12500$
- $C_{\mathrm{max}}^{\mathrm{EV}} = 25000$
- $V_{\max}^{\mathrm{EV}} = 400$
- $\Delta_{\mathrm{move}}^{\mathrm{EV}} = 50$
- $1 \leq \mathrm{pos}_i \leq |V| (1 \leq i \leq N_\mathrm{EV})$
- $\gamma = 2.0$ **"[小数]"**
- $T_\mathrm{max} = 1000$

### 繰り返し処理(入出力形式2)

- $1 \leq x_i \leq |V|$ $(i \neq j$ なら $x_i \neq x_j, 1 \leq i \leq N_\mathrm{grid})$
- $0 \leq y_i \leq C_{\mathrm{max}}^{\mathrm{grid}}$ $(1 \leq i \leq N_\mathrm{grid})$
- $-10000 \lt \mathrm{pw}_{i}^{\mathrm{actual},j} \lt 10000 (1 \leq i \leq N_\mathrm{grid}, -1 \leq j \leq T_\mathrm{max}-2)$
- $0 \leq \mathrm{pw}_{i}^{\mathrm{excess},j} \lt 10000, (1 \leq i \leq N_\mathrm{grid}, -1 \leq j \leq T_\mathrm{max}-2)$
- $0 \leq \mathrm{pw}_{i}^{\mathrm{buy},j} \lt 10000, (1 \leq i \leq N_\mathrm{grid}, -1 \leq j \leq T_\mathrm{max}-2)$
- $0 \leq \mathrm{charge}_i \leq C_{\mathrm{max}}^{\mathrm{EV}}$ $(1 \leq i \leq N_\mathrm{EV})$
- $1 \leq u_i, v_i \leq |V|$ $(1 \leq i \leq N_\mathrm{EV})$
- $0 \leq \mathrm{dist\_from}\_u_i \leq \lceil 2\sqrt{2|V|} \rceil$ $(1 \leq i \leq N_\mathrm{EV})$
- $0 \leq \mathrm{dist\_to}\_v_i \leq \lceil 2\sqrt{2|V|} \rceil$ $(1 \leq i \leq N_\mathrm{EV})$
- $1 \leq N_{\mathrm{adj},i} \leq 5(\mathrm{MaxDegree})$ $(1 \leq i \leq N_\mathrm{EV})$
- $1 \leq a_{i,j} \leq |V|$ $(1 \leq i \leq N_\mathrm{EV}, 1 \leq j \leq N_{\mathrm{adj},i})$

### スコア(入出力形式3)

- $\mathrm{Score}$ **"[小数]"**

 入出力例 

注意: **この例はわかりやすさのために小さなセットで入出力を説明したものである。そのためパラメータの値は"入出力制約"に書かれた値とは異なるが、入出力のフォーマット(入出力形式1,2及び3)とEVの動作、及び"ナノグリッドの蓄電池の充放電処理"に書かれた計算方法は実際と同じである。**

.pre-sample-inout {
  margin: 0;
}

    
        時刻
        ジャッジ
        コンテスタント
        説明
    
    
        
        ```plain
4 4
1 2 1
2 3 2
3 4 3
4 1 1
0
2 2 1 0 10
5 -2
-4 4
2 10 20 4
1 1
4 2
2 5 10 2 1
2
4
0.5
4
```
        
        はじめに、ジャッジ側からデータが与えられる。
            $1$ 行目: 無向グラフ $G$ は $|V| = 4$ 個の頂点と $|E| = 4$ 本の辺から構成される。
            次の $4$ 行 ($2$ - $5$ 行目) は、グラフの辺に関する情報を表す。
            $2$ 行目: 辺 $1$ は頂点 $1$ と頂点 $2$ を結んでおり、長さは $1$ である。
            $3$ 行目: 辺 $2$ は頂点 $2$ と頂点 $3$ を結んでおり、長さは $2$ である。
            $4$ 行目: 辺 $3$ は頂点 $3$ と頂点 $4$ を結んでおり、長さは $3$ である。
            $5$ 行目: 辺 $4$ は頂点 $4$ と頂点 $1$ を結んでおり、長さは $1$ である。
            $6$ 行目: 天候タイプは $0$ "晴(ゲリラ豪雨無し)" である。
            $7$ 行目: 予想電力需給が一定の時間区間の数は $2$ 個、ナノグリッドの需要パターンは $2$ 個、電力需給のゆらぎの分散は $1$ 、ゲリラ豪雨の発生確率は $0$、ゲリラ豪雨発生時の電力需給の低下量は $10$ である。
            次の $2$ 行 ($8$ - $9$ 行目) は、予想電力需給に関する情報を表す。
            $8$ 行目: 需要パターン $1$ のナノグリッドの予想電力需給は $5$ (時間区間 $1$)、$-2$ (時間区間 $2$)である。
            $9$ 行目: 需要パターン $2$ のナノグリッドの予想電力需給は $-4$ (時間区間 $1$)、$4$ (時間区間 $2$)である。
            $10$ 行目: グラフ $G$ の頂点のうちナノグリッドがあるものは $N_\mathrm{grid} = 2$ 個、時刻 $t=0$ におけるナノグリッドの蓄電量は $C_{\mathrm{init}}^{\mathrm{grid}} = 10$、最大蓄電量は $C_{\mathrm{max}}^{\mathrm{grid}} = 20$、上限充放電速度は $V_{\max}^{\mathrm{grid}} = 4$ である。
            $11$ 行目: ナノグリッド $1$ は頂点 $1$ 上にあり、需要パターンは $1$ である。
            $12$ 行目: ナノグリッド $2$ は頂点 $4$ 上にあり、需要パターンは $2$ である。
            $13$ 行目: あなたが動作させることができるEVの台数は $N_\mathrm{EV} = 2$ 台、時刻 $t=0$ におけるEVの蓄電量は $C_{\mathrm{init}}^{\mathrm{EV}} = 5$、最大蓄電量は $C_{\mathrm{max}}^{\mathrm{EV}} = 10$、上限充放電速度は $V_{\max}^{\mathrm{EV}} = 2$ 、単位時間のEVの移動で減少する蓄電量は $\Delta_{\mathrm{move}}^{\mathrm{EV}} = 1$ である。
            次の $2$ 行 ($14$ - $15$ 行目) は時刻 $t=0$ における各EVの位置を表す。
            $14$ 行目: EV $1$ は時刻 $t=0$ で頂点 $2$ 上にある。
            $15$ 行目: EV $2$ は時刻 $t=0$ で頂点 $4$ 上にある。
            $16$ 行目: ナノグリッドが外部から補充した単位電気量あたりの減点は $\gamma = 0.5$ 点である。
            $17$ 行目: あなたが行動するターン数は $T_{\max} = 4$ である。
        
    
    
        0
        ```plain
1 10 0 0 0
4 10 0 0 0
5
2 2 0 0
2 1 3
5
4 4 0 0
2 1 3
```
        ```plain
move 1
charge_from_grid 2
```
        
            次いで、ジャッジ側から時刻 $0$ でのデータが与えられる。
            1 行目: 頂点 1 にあるナノグリッドの時刻 $0$ での蓄電量は $10$ である(時刻 $0$ の場合、残りの $3$ つの値は必ず $0$ である)。
            2 行目: 頂点 4 にあるナノグリッドの時刻 $0$ での蓄電量は $10$ である(時刻 $0$ の場合、残りの $3$ つの値は必ず $0$ である)。
            次の $3$ 行 ($3$ - $5$ 行目) は、EV $1$ の状態を表す。
            3 行目: EV $1$ の時刻 $0$ での蓄電量は $5$ である。
            4 行目: EV $1$ は時刻 $0$ において頂点 $2$ 上に位置する。
            5 行目: EV $1$ が `move` コマンドでその方向に向かって移動可能な頂点は $N_{\mathrm{adj},1} = 2$ 個あり、頂点 $1$ および頂点 $3$ である。
            次の $3$ 行 ($6$ - $8$ 行目) は、EV $2$ の状態を表す。
            6 行目: EV $2$ の時刻 $0$ での蓄電量は $5$ である。
            7 行目: EV $2$ は時刻 $0$ において頂点 $4$ 上に位置する。
            8 行目: EV $2$ が `move` コマンドでその方向に向かって移動可能な頂点は $N_{\mathrm{adj},2} = 2$ 個あり、頂点 $1$ および頂点 $3$ である。
            これに対するコンテスタントの出力は以下のとおりである。
            1 行目: EV $1$ を頂点 $1$ の方向へ移動させようとする。EV $1$ の充電が $1$ 消費されるが、蓄電量が $1$ 以上であったため移動は成功する。頂点 $1$ から頂点 $2$ への辺の長さは $1$ であるので、時刻 $1$ に頂点 $2$ へ移動することが可能である。
            2 行目: EV $2$ はナノグリッドから $2$ だけ充電する。EV $2$ はナノグリッド上にあり、充電量はEV $2$ の上限充放電速度 $2$ を超えない。またEV $2$ の充電後の蓄電量は最大蓄電量 $10$ を超えない。したがって動作条件を満たすので、時刻 $1$ に充電量を $7$ に増やすことが可能である。
        
    
    
        1
        ```plain
1 14 5 1 0
4 6 -4 0 2
4
1 1 0 0
2 2 4
7
4 4 0 0
2 1 3
```
        ```plain
stay
charge_from_grid 2
```
        
            次いで、ジャッジ側から時刻 $1$ でのデータが与えられる。
            1 行目: 頂点 1 にあるナノグリッドの時刻 $1$ での蓄電量は $14$ であり、前時刻 $t=0$ における実際の電力需給、余って捨てられた電気の量、電力不足で系統から購入した電気の量がそれぞれ $5, 1, 0$ である(ナノグリッドの上限充放電速度を超える分は捨てられる)。
            2 行目: 頂点 4 にあるナノグリッドの時刻 $1$ での蓄電量は $6$ であり、前時刻 $t=0$ における実際の電力需給、余って捨てられた電気の量、電力不足で系統から購入した電気の量がそれぞれ $-4, 0, 2$ である。
            次の $3$ 行 ($3$ - $5$ 行目) は、EV $1$ の状態を表す。
            3 行目: EV $1$ の時刻 $1$ での蓄電量は $4$ である。
            4 行目: EV $1$ は時刻 $1$ において頂点 $1$ 上に位置する。
            5 行目: EV $1$ が `move` コマンドでその方向に向かって移動可能な頂点は $N_{\mathrm{adj},1} = 2$ 個あり、頂点 $2$ および頂点 $4$ である。
            次の $3$ 行 ($6$ - $8$ 行目) は、EV $2$ の状態を表す。
            6 行目: EV $2$ の時刻 $1$ での蓄電量は $7$ である。
            7 行目: EV $2$ は時刻 $1$ において頂点 $4$ 上に位置する。
            8 行目: EV $2$ が `move` コマンドでその方向に向かって移動可能な頂点は $N_{\mathrm{adj},2} = 2$ 個あり、頂点 $1$ および頂点 $3$ である。
            これに対するコンテスタントの出力は以下のとおりである。
            1 行目: EV $1$ はその場にとどまる
            2 行目: EV $2$ はナノグリッドから $2$ だけ充電する。EV $2$ はナノグリッド上にあり、充電量はEV $2$ の上限充放電速度 $2$ を超えない。またEV $2$ の充電後の蓄電量は最大蓄電量 $10$ を超えない。したがって動作条件を満たすので、時刻 $2$ に充電量を $9$ に増やすことが可能である。
        
    
    
        2
        ```plain
1 18 5 1 0 
4 2 -4 0 2
4
1 1 0 0
2 2 4
9
4 4 0 0
2 1 3
```
        ```plain
move 4
charge_to_grid 2
```
        
            次いで、ジャッジ側から時刻 $2$ でのデータが与えられる。
            1 行目: 頂点 1 にあるナノグリッドの時刻 $2$ での蓄電量は $18$ であり、前時刻 $t=1$ における実際の電力需給、余って捨てられた電気の量、電力不足で系統から購入した電気の量がそれぞれ $5, 1, 0$ である。
            2 行目: 頂点 4 にあるナノグリッドの時刻 $2$ での蓄電量は $2$ であり、前時刻 $t=1$ における実際の電力需給、余って捨てられた電気の量、電力不足で系統から購入した電気の量がそれぞれ $-4, 0, 2$ である。
            次の $3$ 行 ($3$ - $5$ 行目) は、EV $1$ の状態を表す。
            3 行目: EV $1$ の時刻 $2$ での蓄電量は $4$ である。
            4 行目: EV $1$ は時刻 $2$ において頂点 $1$ 上に位置する。
            5 行目: EV $1$ が `move` コマンドでその方向に向かって移動可能な頂点は $N_{\mathrm{adj},1} = 2$ 個あり、頂点 $2$ および頂点 $4$ である。
            次の $3$ 行 ($6$ - $8$ 行目) は、EV $2$ の状態を表す。
            6 行目: EV $2$ の時刻 $2$ での蓄電量は $9$ である。
            7 行目: EV $2$ は時刻 $2$ において頂点 $4$ 上に位置する。
            8 行目: EV $2$ が `move` コマンドでその方向に向かって移動可能な頂点は $N_{\mathrm{adj},2} = 2$ 個あり、頂点 $1$ および頂点 $3$ である。
            これに対するコンテスタントの出力は以下のとおりである。
            1 行目: EV $1$ を頂点 $4$ の方向へ移動させようとする。EV $1$ の充電が $1$ 消費されるが、蓄電量が $1$ 以上であったため移動は成功する。頂点 $1$ から頂点 $4$ への辺の長さは $1$ であるので、時刻 $3$ に頂点 $4$ へ移動することが可能である。
            2 行目: EV $2$ はナノグリッドへ $2$ だけ放電する。EV $2$ はナノグリッド上にあり、放電量はEV $2$ の上限充放電速度 $2$ を超えない。またEV $2$ の放電後の蓄電量は $0$ 下回らない。したがって動作条件を満たすので、時刻 $3$ に充電量は $7$ に減ることになる。
        
    
    
        3
        ```plain
1 17 -1 0 0
4 6 3 1 0
3
4 4 0 0
2 1 3
7
4 4 0 0
2 1 3
```
        ```plain
stay
move 1
```
        
            次いで、ジャッジ側から時刻 $3$ でのデータが与えられる。
            1 行目: 頂点 1 にあるナノグリッドの時刻 $3$ での蓄電量は $17$ であり、前時刻 $t=2$ における実際の電力需給、余って捨てられた電気の量、電力不足で系統から購入した電気の量がそれぞれ $-1, 0, 0$ である(電力需給の予測値は $-2$ だがゆらぎにより実際の値は $-1$ となった)。
            2 行目: 頂点 4 にあるナノグリッドの時刻 $3$ での蓄電量は $6$ であり、前時刻 $t=2$ における実際の電力需給、余って捨てられた電気の量、電力不足で系統から購入した電気の量がそれぞれ $3, 1, 0$ である。(電力需給の予測値は $4$ だがゆらぎにより実際の値は $3$ となった)。
            次の $3$ 行 ($3$ - $5$ 行目) は、EV $1$ の状態を表す。
            3 行目: EV $1$ の時刻 $3$ での蓄電量は $3$ である。
            4 行目: EV $1$ は時刻 $3$ において頂点 $4$ 上に位置する。
            5 行目: EV $1$ が `move` コマンドでその方向に向かって移動可能な頂点は $N_{\mathrm{adj},1} = 2$ 個あり、頂点 $1$ および頂点 $3$ である。
            次の $3$ 行 ($6$ - $8$ 行目) は、EV $2$ の状態を表す。
            6 行目: EV $2$ の時刻 $3$ での蓄電量は $7$ である。
            7 行目: EV $2$ は時刻 $3$ において頂点 $4$ 上に位置する。
            8 行目: EV $2$ が `move` コマンドでその方向に向かって移動可能な頂点は $N_{\mathrm{adj},2} = 2$ 個あり、頂点 $1$ および頂点 $3$ である。
            これに対するコンテスタントの出力は以下のとおりである。
            1 行目: EV $1$ はその場にとどまる
            2 行目: EV $2$ を頂点 $1$ の方向へ移動させようとする。EV $1$ の充電が $1$ 消費されるが、蓄電量が $1$ 以上であったため移動は成功する。頂点 $4$ から頂点 $1$ への辺の長さは $1$ であるので、時刻 $4$ に頂点 $1$ へ移動することが可能である。
        
    
    
        4
        ```plain
1 15 -2 0 0
4 10 5 1 0
3
4 4 0 0
2 1 3
6
1 1 0 0
2 2 4
3000032.0
```
        
        
            最後に、ジャッジ側から時刻 $4$ でのデータが与えられる。
            1 行目: 頂点 1 にあるナノグリッドの時刻 $4$ での蓄電量は $15$ であり、前時刻 $t=3$ における実際の電力需給、余って捨てられた電気の量、電力不足で系統から購入した電気の量がそれぞれ $-2, 0, 0$ である。
            2 行目: 頂点 4 にあるナノグリッドの時刻 $4$ での蓄電量は $10$ であり、前時刻 $t=3$ における実際の電力需給、余って捨てられた電気の量、電力不足で系統から購入した電気の量がそれぞれ $5, 1, 0$ である(電力需給の予測値は $4$ だがゆらぎにより実際の値は $5$ となった)。
            次の $3$ 行 ($3$ - $5$ 行目) は、EV $1$ の状態を表す。
            3 行目: EV $1$ の時刻 $4$ での蓄電量は $3$ である。
            4 行目: EV $1$ は時刻 $4$ において頂点 $4$ 上に位置する。
            5 行目: EV $1$ が `move` コマンドでその方向に向かって移動可能な頂点は $N_{\mathrm{adj},1} = 2$ 個あり、頂点 $1$ および頂点 $3$ である。
            次の $3$ 行 ($6$ - $8$ 行目) は、EV $2$ の状態を表す。
            6 行目: EV $2$ の時刻 $4$ での蓄電量は $6$ である。
            7 行目: EV $2$ は時刻 $4$ において頂点 $1$ 上に位置する。
            8 行目: EV $2$ が `move` コマンドでその方向に向かって移動可能な頂点は $N_{\mathrm{adj},2} = 2$ 個あり、頂点 $2$ および頂点 $4$ である。
            次の $1$ 行 ($9$ 行目) は、スコアを表す。
            9 行目: スコアは $3000032.0$ となる。
            計算方法: EV $2$ 台の最終時刻の蓄電量がそれぞれ $3$、$6$ であり、ナノグリッド $2$ 箇所の最終時刻の蓄電量がそれぞれ $15$、$10$ であるため、総残電力は $34$ となる。また、系統からの購入電力量が合計で $4$ (頂点 $4$ のナノグリッドが時刻 $0$ と $1$ でそれぞれ $2$ ずつ購入)なので、補正を除いたスコアは $34-0.5 \times 4=32.0$ となる。補正も含めたスコアは $3000032.0$ となる。
        
    

 サンプルコード A 

問題Aのツールキット一式は[ここ](https://img.atcoder.jp/hokudai-hitachi2020/01432768d288b809f469d88ea607e394.zip)からダウンロードできます。<br>
このツールキットを用いて、手元の環境で入力サンプル(テストケース)の生成や、ジャッジの実行が可能です。また、ビギナー向けのサンプルコードも用意しています。<br>
**小さなバグが見つかったため、ツールキットを修正しました(12/18)。**<br>
**windowsでも利用可能なツールキットを公開しました(Cygwin,WSLで動作確認済)。合わせて英語版のREADME(short ver.)も追加しました。また、辺数の制約に関するバグの修正をしています。(12/18)**<br>
**英語版のREADME(full ver.)を公開しました。また、日本語版のREADMEの細かな誤りを修正しました。(12/21)**<br>
**ジャッジシステムの修正(python等投稿対応)に合わせてツールキットを修正しました。また、Pythonのサンプルコードも同梱しました。使い方はREADMEを御覧ください。(1/6)**<br>
**ツールキットを修正しました(DEBUG_LEVELに関する修正など)。また、サンプルコードの微修正も行いました。(1/12)**<br>

- 入力サンプルジェネレータ
- テスター
- ビキナー向けのサンプルコード