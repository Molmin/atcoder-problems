目次
        

- [問題概要](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%95%8F%E9%A1%8C%E6%A6%82%E8%A6%81)
        -   - [入出力形式1](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F1)
-   - [入出力形式2](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F2)
-   - -   -   - [$\mathrm{grid\_info}$ 詳細](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#mathrmgrid_info-%E8%A9%B3%E7%B4%B0)
-   -   - [$\mathrm{EV\_info}$ 詳細](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#mathrmev_info-%E8%A9%B3%E7%B4%B0)

-   - [入出力形式3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F3)
- [問題詳細](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%95%8F%E9%A1%8C%E8%A9%B3%E7%B4%B0)
        -   - [地図情報](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%9C%B0%E5%9B%B3%E6%83%85%E5%A0%B1)
-   - [アセット情報](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E3%82%A2%E3%82%BB%E3%83%83%E3%83%88%E6%83%85%E5%A0%B1)
-   - [電力需要](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E9%9B%BB%E5%8A%9B%E9%9C%80%E8%A6%81)
-   - [電力供給](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E9%9B%BB%E5%8A%9B%E4%BE%9B%E7%B5%A6)
-   - [電力需給詳細](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E9%9B%BB%E5%8A%9B%E9%9C%80%E7%B5%A6%E8%A9%B3%E7%B4%B0)
-   - [作業](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E4%BD%9C%E6%A5%AD)
-   - [運搬依頼](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E9%81%8B%E6%90%AC%E4%BE%9D%E9%A0%BC)
-   - [車両](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E8%BB%8A%E4%B8%A1)
-   - [採点方法](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E6%8E%A1%E7%82%B9%E6%96%B9%E6%B3%95)
-   - [クエリ詳細](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E3%82%AF%E3%82%A8%E3%83%AA%E8%A9%B3%E7%B4%B0)
-   - [入出力制約](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%88%B6%E7%B4%84)
- [サンプルコードB](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%89B)

        

        

        
        
        

## 問題文

再生可能エネルギーを活用した最新鋭の超小型グリッド(ナノグリッド)を分散配置することで、地域に低炭素の電力を安定供給するプロジェクトが立ち上がった。供給した電力は各地の電力需要地で利用される他、EVでヒトやモノの輸送を行う際にも活用される。

あなたはこのプロジェクトの初期設計者だ。開発部が作成したシミュレータを駆使して、安定した電力供給に加えて円滑に輸送サービスを提供するために適切なナノグリッドの配置を考えて欲しい。設備設計後、日々運用アルゴリズムも提出して頂くことになる。仮にあなたが考案した設備配置が環境負荷の低い運転が可能で、広域停電が発生した非常時の際も円滑に電力を供給できるならば、追加の得点が得られるだろう。

![](https://img.atcoder.jp/hokudai-hitachi2021/problemB_fig1.png)

図1 問題Bの解答から採点までの流れ

<br>

![](https://img.atcoder.jp/hokudai-hitachi2021/45a33c63762ec78374950de4919d574c.png)

図2 デザイン決定の例(予算額6600万円の場合)。各ナノグリッドのデザイン(設備構成)に加えて、ナノグリッドの設置場所、EVの初期配置や初期蓄電量も決定する 

<br>

![](https://img.atcoder.jp/hokudai-hitachi2021/problemB_fig3.png)

図3 問題AとBの違い 

## 入出力形式1

はじめに、コンテスタントはジャッジから必要な情報を入手することができる。その際の入出力形式は以下の通りである。

コンテスタント
ジャッジ

$\mathrm{query}_1$

$\mathrm{output}_1$

$\mathrm{query}_2$

$\mathrm{output}_2$

$\vdots$
$\vdots$

$\mathrm{query}_M$

$\mathrm{output}_M$

$\mathrm{"end"}$

- 1 行$\mathrm{query}$を出力するごとに、対応した情報が標準入力から与えられる。コンテスタントは$\mathrm{query}$を出力するごとに標準出力をフラッシュする必要があり、また、$\mathrm{query}$を出力する度に全ての入力を読み切る必要がある。これらに違反した場合は未定義動作となる。
- 最後のクエリでは`end`を出力する必要がある。ジャッジは`end`を読み込むことで次の動作に移行する。`end`を発行しない場合、未定義動作となる。
- 有効な$\mathrm{query}$は以下の通りである。有効ではない$\mathrm{query}$を出力した場合は`WA`となる。
-   - `budget`
-   - `temporal`
-   - `score`
-   - `graph`
-   - `demand`
-   - `demand [day] [id]`
-   - `radiation [day] [id]`
-   - `asset`
-   - `asset PV [id]`
-   - `asset FE [id]`
-   - `asset RB [id]`
-   - `asset EVC [id]`
-   - `asset vehicle [id]`
-   - `order [day]`
-   - `shelter`
-   - `work`
-   - `work [day] [id]`
-   - `end`
- 各$\mathrm{query}$に対する出力の内容は[クエリ詳細](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E3%82%AF%E3%82%A8%E3%83%AA%E8%A9%B3%E7%B4%B0)に記載する。

## 入出力形式2

入出力形式1の後、コンテスタントは以下の形式でナノグリッド設備構成とEV配置を出力する。

まず、コンテスタントは設置するナノグリッドの数$N_\mathrm{grid}$を出力する。

```plain
$\begin{aligned}N_\mathrm{grid}\end{aligned}$
```

次に、以下の形式でナノグリッドの設備情報を出力する。

```plain
$\begin{aligned}& \mathrm{grid\_info}_1 \\& \vdots \\& \mathrm{grid\_info}_{N_\mathrm{grid}} \\\end{aligned}$
```

- コンテスタントは後述する$\mathrm{grid\_info}$の形式に従って、$N_\mathrm{grid}$個のナノグリッドを配置する。
- あらかじめ設定された電力需要地以外に設置されるナノグリッドの電力需要は常に$0$である。
- 各ナノグリッドについて、PV 設置量に必要な土地面積が各頂点の取得可能面積量を上回った場合、`WA`である。
- 同じ頂点に複数回ナノグリッドを設置しようとした場合、最後の設置が有効となる。
- <font color="red">ナノグリッドには以下ルールでIDが振られ、以降このIDで参照される。このIDは電力需要地のIDとは異なることに注意せよ。<br>
ルール：電力需要地に設置されたナノグリッドがある場合、電力需要地のID順にIDが振られる。その後、残りのナノグリッドに対して、本形式での設置順に、続きからIDが振られる。電力需要地に設置されたナノグリッドが無い場合は、本形式での設置順にIDが振られる。</font>

次に、コンテスタントは配置するEVの台数$N_\mathrm{EV}$を出力する。

```plain
$\begin{aligned}N_\mathrm{EV}\end{aligned}$
```

次に、以下の形式で配置するEVの情報を出力する。

```plain
$\begin{aligned}& \mathrm{EV\_info}_1 \\& \vdots \\& \mathrm{EV\_info}_{N_\mathrm{EV}}\end{aligned}$
```

- コンテスタントは後述する$\mathrm{EV\_info}$の形式に従って、$N_\mathrm{EV}$個のEVを配置する。
- EVには設置順にIDが振られ、以降このIDで参照される。

最後に、コンテスタントは以下の形で実行形式を指定する。

```plain
$\begin{aligned}\mathrm{command} & & \mathrm{day}\end{aligned}$
```

- 1つめの引数は実行形態を指定する文字列である。有効な文字列は以下の通り。
- `test`: 指定したナノグリッド配置、EV配置で$\mathrm{day}$で指定された日付のテストを実行する。この場合、引き続き入出力形式3により日々の運用を行い、その日のスコアに関する情報を標準入力に返却する。スコアの形式など詳細は[入出力形式3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F3)を参照せよ。
- `submit`: 指定したナノグリッド配置、EV配置を解答として提出する。$\mathrm{day}$は無視される。この場合、引き続き入出力形式3により日々の運用を行い、最後に災害対応のテストを行う。詳細は[入出力形式3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F3)を参照せよ。
- 2 つめの引数はテストを実行する日付を指定する。日付は第 1 日目から第$N_\mathrm{day}$ 目まで有効であり、それ以外の日付を指定した場合は`WA`となる。

### $\mathrm{grid\_info}$ 詳細

### 入出力形式

```plain
$\begin{aligned}& x^\mathrm{grid}_\mathrm{pos} & & \mathrm{Chg}^\mathrm{grid}_\mathrm{init} \\& \mathrm{type}^\mathrm{grid}_\mathrm{PV} & & A^\mathrm{grid}_\mathrm{PV} \\& \mathrm{type}^\mathrm{grid}_\mathrm{FE} \\& \mathrm{type}^\mathrm{grid}_\mathrm{RB} & & A^\mathrm{grid}_\mathrm{RB} \\& \mathrm{type}^\mathrm{grid}_\mathrm{EVC}\end{aligned}$
```

### 説明

- 1 行目は、ナノグリッドが頂点$x^\mathrm{grid}_\mathrm{pos}$に位置し、開始時の蓄電量が$\mathrm{Chg}^\mathrm{grid}_\mathrm{init}$であることを示す。
- 続く4行は導入する設備の種類と量を指定する。PV、FE、RB、EVCの各設備は各々1種類のみ導入可能である。
- 1行目は PV 設備の構成を表す。$\mathrm{type}^\mathrm{grid}_\mathrm{PV}$は種類、$A^\mathrm{grid}_\mathrm{PV}$は発電容量で見たPV導入量を表す。
- 2行目は自家発電機の構成を表す。$\mathrm{type}^\mathrm{grid}_\mathrm{FE}$は種類を表す。
- 3行目は蓄電池の構成を表す。$\mathrm{type}^\mathrm{grid}_\mathrm{RB}$は種類、$A^\mathrm{grid}_\mathrm{RB}$は導入量を表す。
- 4行目はEVCの種類を表す。$\mathrm{type}^\mathrm{grid}_\mathrm{EVC}$は種類を表す。
- PV導入に関しては、次の制約を満たす必要がある:
<p>$A^\mathrm{PV} A^\mathrm{grid}_\mathrm{PV} \leq A_{x^\mathrm{grid}_\mathrm{pos}}$</p>
ここで、$A^\mathrm{PV}$は設置しようとしているPVの発電容量あたり要求面積、$A^\mathrm{grid}_\mathrm{PV}$はPVの導入量、$A_{x^\mathrm{grid}_\mathrm{pos}}$はナノグリッドを設置しようとしている頂点のPV導入可能面積である。

### $\mathrm{EV\_info}$ 詳細

### 入出力形式

```plain
$\begin{aligned}& x^\mathrm{EV}_\mathrm{pos} & & \mathrm{Chg}^\mathrm{EV}_\mathrm{init} & & \mathrm{type}_\mathrm{EV}\end{aligned}$
```

### 説明

- EVが$t = 0$で頂点$x^\mathrm{EV}_\mathrm{pos}$に配置され、開始時の蓄電量が$\mathrm{Chg}^\mathrm{EV}_\mathrm{init}$であり、製品$\mathrm{type}_\mathrm{EV}$であることを示す。
- 頂点$x^\mathrm{EV}_\mathrm{pos}$は予めナノグリッドが設置された頂点である必要がある。

## 入出力形式3

ナノグリッドとEVの配置を出力した後、コンテスタントはEV、FE発電量、運搬注文の諾否、および作業機械に係わる制御を行い、配置のテストを行う。

各時刻$t$毎に、コンテスタントは最初に、その時刻におけるEVとナノグリッド、作業機械の状態$\mathrm{info}_t$を受け取る。$\mathrm{info}_t$の形式は以下の通りである。

> $\begin{aligned}& \mathrm{Chg}^\mathrm{grid}_1 & & \mathrm{pw}^\mathrm{actual}_1 & & \mathrm{pw}^\mathrm{excess}_1 & & \mathrm{pw}^\mathrm{FE}_1 & & \mathrm{pw}^\mathrm{buy}_1 \\& \vdots \\& \mathrm{Chg}^\mathrm{grid}_{N_\mathrm{grid}} & & \mathrm{pw}^\mathrm{actual}_{N_\mathrm{grid}} & & \mathrm{pw}^\mathrm{excess}_{N_\mathrm{grid}} & & \mathrm{pw}^\mathrm{FE}_{N_\mathrm{grid}} & & \mathrm{pw}^\mathrm{buy}_{N_\mathrm{grid}} \\& \mathrm{Chg}^\mathrm{EV}_1 & & u_1 & & v_1 & & \mathrm{dist}_1 & & N^\mathrm{order}_1 & & o_{i, 1} & & \cdots & & o_{i, N^\mathrm{order}_1} \\& \vdots \\& \mathrm{Chg}^\mathrm{EV}_{N_\mathrm{EV}} & & u_{N_\mathrm{EV}} & & v_{N_\mathrm{EV}} & & \mathrm{dist}_{N_\mathrm{EV}} & & N^\mathrm{order}_{N_\mathrm{EV}} & & o_{i, {N_\mathrm{EV}}} & & \cdots & & o_{i, N^\mathrm{order}_{N_\mathrm{EV}}} \\& \mathrm{Chg}^\mathrm{work}_1 & & x^\mathrm{work}_1 & & W^\mathrm{work}_1 & & w^\mathrm{work}_1 \\& \vdots \\& \mathrm{Chg}^\mathrm{work}_{N_\mathrm{work}} & & x^\mathrm{work}_{N_\mathrm{work}} & & W^\mathrm{work}_{N_\mathrm{work}} & & w^\mathrm{work}_{N_\mathrm{work}} \\& N_\mathrm{order} \\& \mathrm{id}_1 & & w_1 & & z_1 & & \mathrm{state}_1 & & \mathrm{time}_1 \\& \vdots \\& \mathrm{id}_{N_\mathrm{order}} & & w_{N_\mathrm{order}} & & z_{N_\mathrm{order}} & & \mathrm{state}_{N_\mathrm{order}} & & \mathrm{time}_{N_\mathrm{order}} \\\end{aligned}$

- 最初の$N_\mathrm{grid}$行はナノグリッドの電力需給に関する情報である。$i$行目は、IDが$i$であるナノグリッドの蓄電量が$\mathrm{Chg}^\mathrm{grid}_i$であり、前時刻における電力収支が$\mathrm{pw}^\mathrm{actual}_i$、<font color="red">過剰発電量</font>が$\mathrm{pw}^\mathrm{excess}_i$、燃料エンジン発電量が$\mathrm{pw}^\mathrm{FE}_i$、系統から購入した電力の量が$\mathrm{pw}^\mathrm{buy}_i$であることを表す。ただし、$t = 0$においては、$\mathrm{pw}^\mathrm{actual}_i = \mathrm{pw}^\mathrm{excess}_i = \mathrm{pw}^\mathrm{FE}_i = \mathrm{pw}^\mathrm{buy}_i = 0$である。
- 続く$N_\mathrm{EV}$行はEVの状態を表す。$N_\mathrm{EV}$行のうち$i$行目はIDが$i$であるEVの状態を表し、蓄電量が$\mathrm{Chg}^\mathrm{EV}_i$であり、グラフ上の座標$(u_i, v_i, \mathrm{dist}_1)$に位置し、運搬中の注文が$N^\mathrm{order}_i$件存在してそれらが$o_{i, 1}, \cdots, o_{i, N^\mathrm{order}_i}$であることを表す。
- 続く$N_\mathrm{work}$行は作業注文の状態を表す。<font color="red">$N_\mathrm{work}$</font>行のうち$i$行目はIDが$i$である作業需要の状態を表し、対応する作業機械の蓄電量が$\mathrm{Chg}^\mathrm{work}_i$であり、頂点$x^\mathrm{work}_i$で発生している作業需要であり、今まで実行された作業の累計が$W^\mathrm{work}_i$であり、現在の連続作業時間が$w^\mathrm{work}_i$であることを表す。
- 続く$1$行は、未処理の運搬注文の個数$N_\mathrm{order}$を表す。未処理であるとは、注文が拒否もキャンセルもされておらず、また運搬が完了していないということである。
- 続く$N_\mathrm{order}$行は未処理の運搬注文の詳細に関する情報である。$N_\mathrm{order}$行のうち$i$行目は未処理注文のうち$i$番目に発生した注文に関する情報で、IDが$\mathrm{id}$、出発地点が$w_i$、到着地点が$z_i$、状態が$\mathrm{state}_i$で、発生時刻が$\mathrm{time}_i$であることを表す。状態についての詳細は[運搬依頼](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E9%81%8B%E6%90%AC%E4%BE%9D%E9%A0%BC)を参照せよ。

$\mathrm{info}_t$を受け取ったのち、コンテスタントは以下の形式で望むだけコマンドを発行する。

> $\begin{aligned}& \mathrm{group} & & \mathrm{id} & & \mathrm{command}\end{aligned}$

- $\mathrm{group}$は`EV`、`FE`、`Machinery`、`Order`のうち、いずれか一つでなければならない。$\mathrm{group}$としてこれら以外の文字列を発行した場合は`WA`である。
- `EV`はEVを、`FE`は各ナノグリッドに設置された燃料発電機を、`Machinery`は各作業需要地の作業機械を操作し、`Order`は注文に対する応答を行うことを表す。
- $\mathrm{id}$は各グループの内、実際に操作、または応答する対象を表す。$\mathrm{group}$が`EV`である場合にはEVのID、$\mathrm{group}$が`FE`である場合にはナノグリッドのID、$\mathrm{group}$が`Machinery`である場合には作業需要地のID、$\mathrm{group}$が`Order`である場合には注文のIDを指定する。各グループに対して有効ではないIDを指定した場合は`WA`である。
- $\mathrm{command}$は$\mathrm{group}$と$\mathrm{id}$で指定した対象に対する操作、または応答を表す。具体的な$\mathrm{command}$の内容については$\mathrm{group}$が`EV`である場合には[車両](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E8%BB%8A%E4%B8%A1)、$\mathrm{group}$が`FE`である場合には[電力供給](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E9%9B%BB%E5%8A%9B%E4%BE%9B%E7%B5%A6)、$\mathrm{group}$が`Machinery`である場合には[作業](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E4%BD%9C%E6%A5%AD)、$\mathrm{group}$が`Order`である場合には[運搬依頼](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E9%81%8B%E6%90%AC%E4%BE%9D%E9%A0%BC)を参照せよ。各グループに対して有効ではない$\mathrm{command}$を発行した場合は`WA`である。
- 以上のコマンド発行のうち、同一の$\mathrm{group}$と$\mathrm{id}$に対して複数回のコマンドが発行された場合は最後に発行されたコマンドが使用されるが、複数回のコマンド発行のうち、一度でも有効ではないコマンドが発行された場合は`WA`である。
時刻$t$におけるコマンド発行後、コンテスタントは以下の内容を出力してジャッジにコマンド発行終了を通知する。

> $\begin{aligned}\mathrm{"end"}\end{aligned}$

- 直接文字列で`end`を発行すればよい。
- `end`が発行されない場合の動作は未定義である。

以上で時刻$t$における制御が終了する。コンテスタントは以上の操作を$T_\mathrm{max}$回行うことで、1日分のテストを終了する。その後、[入出力形式2](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F2)で実行したコマンドが`test`の場合、以下の形式でスコアを返却する:

$S_\mathrm{trans}\quad S_\mathrm{ele}\quad S_\mathrm{env} \quad S_\mathrm{work}$

返却されたスコアは必ず読み取ること。さもなければ`WA`である。また、このテスト実行に係わるCPU時間も実行時間制限に含まれることに注意せよ。
[入出力形式2](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F2)で実行したコマンドが`submit`の場合、制御を$N_\mathrm{day}$日分行った後、災害対応のテストを行う。災害対応のテストは、まず1から$N_\mathrm{day}$の中から一様ランダムに1日を選択して開始される。

## 問題詳細

## 地図情報

地図情報は単純無向グラフとして与えられる。車両は全てこのグラフの辺の上を移動する。各頂点は 2 次元平面上に配置され、同時に人口と太陽光発電設備の設置容量が指定されている。人口が多い頂点ほど、運搬注文の発生確率が高くなる。また、頂点のうちいくつかには電力需要、または作業需要、あるいはその両方が設定されている。

## アセット情報

一つのナノグリッドは太陽光発電設備(PV)、自家発電機(FE)、蓄電池(RB)、とEV充放電装置(EVC) によって構成される。ナノグリッドを設置する際には、これらの設備に関する構成も指定する必要がある。

各設備の特徴は以下の通り：

- PV: 日射量に比例する量の発電を行う。日射量は各頂点毎に与えられ、時間区間毎に変化する。一度設置してしまえば発電のための追加のコストは必要としないが、各頂点毎の設置容量を超えて設置しようとした場合は`WA`(Wrong Answer)となる。すなわち、PV設置のためには以下の制約を満たす必要がある：
<p>$A^\mathrm{PV} A^\mathrm{grid}_\mathrm{PV} \leq A_i$</p>
ここで、$A^\mathrm{PV}$は設置しようとしているPVの発電容量あたり要求面積、$A^\mathrm{grid}_\mathrm{PV}$はPVの導入量、$A_i$はナノグリッドを設置しようとしている頂点のPV導入可能面積である。
- FE: 燃料を消費することで発電を行う。**FE の発電量はステップごとの出力を指定することで制御する。FEの発電量は最小出力以上、最大出力以下の値、または0を指定する必要があり、それ以外の出力は`WA`である。また、FEの発電効率は最大出力時にもっとも良くなる。** 出力あたりの設置コストは安価で、天候に依存しない発電が可能だが、発電のためには追加のコストが要求される。
- RB: 発電された電力のうち、余剰分を蓄積し、不足時に放出する。シミュレーション時、1日を開始する際の初期蓄電量は任意に指定出来る。
- EVC: PV・FE・RB と負荷を相互に接続し、また、車両等の外部機器との電力入出力を行う。

これらの設備による発電量と EV による充放電を総合し、電力の不足が生じた場合、電力は通常の電気系統からの購入によって賄われる。

また、導入する車両についても、カタログが与えられる。詳細は[車両アセット情報](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E8%BB%8A%E4%B8%A1%E3%82%A2%E3%82%BB%E3%83%83%E3%83%88%E6%83%85%E5%A0%B1)を参照せよ。

これらの設備・車両の導入には初期費用が必要である。初期費用の基準額は[入出力形式1](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F1)の中で取得可能である。初期費用が基準額を超えた場合、スコアにペナルティが与えられる。

## 電力需要

地域には電力需要を持つ地点が存在している。電力需要地の位置、および電力需要の予測値はテストケース開始時に取得可能である。

## 電力供給

電力の供給は主にPVによって行われ、EV または作業機械との充放電と電力需要との差分が RB に集約される。FEは電力不足時に稼働し、不足分を補う。FEの最大出力以上の電力不足が生じた場合、系統からの電力購入が行われる。

- **PV 発電量** : PV 発電量は当該時間区間での日射量と PV 設備容量の積で与えられる。PV 設備容量の与え方については[入出力形式2](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F2)を参照せよ。
- <p>**FE 発電量** : **FE の発電量はステップごとの出力を指定することで制御する。FEの発電量は最小出力以上、最大出力以下の値、または0を指定する必要があり、それ以外の出力は`WA`である。また、FEの発電効率は最大出力時にもっとも良くなる。**</p>
- <p>**RB 充放電量** : RB は短期的な電力需給のインバランスを補償するように動作する。各時刻において、PV 発電量、EV 充放電量と**作業機械充放電量**の和と電力需要との差が、RB 蓄電量に積算されていく。すなわち、PV 発電量と EV からナノグリッドへの充電量の和が、電力需要とナノグリッドから EV への充電量の和を上回っていた場合、RB 蓄電量が増加する。逆の場合は減少する。
**電力供給が過大である場合、PV発電量の抑制が行われる。&lt;font color="red"&gt;&lt;del&gt;が、PV発電量を0としても尚発電量が過大となる場合は`WA`である。&lt;/del&gt;&lt;/font&gt;**</p>

FE の出力を制御するためには、[入出力形式3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F3)にて、以下の形式のコマンドを発行する必要がある。

```plain
$\begin{aligned}\mathrm{"FE"} & & \mathrm{id} & & d\end{aligned}$
```

- $\mathrm{id}$ は頂点番号を用いる。有効な$\mathrm{id}$はコンテスタントが入出力形式2でナノグリッドを設置した位置に対する頂点番号($x^\mathrm{grid}_\mathrm{pos}$)のみであり、それ以外の$\mathrm{id}$を指定した場合は`WA`となる。
- $d$ はFEのステップあたり発電量である。有効な値は該当するナノグリッドに設置されたFEの最低出力以上、最大出力以下の整数値か、0である必要がある。
- 制御が行われなかったFEは発電を行わない。

## 電力需給詳細

各ナノグリッド、電力需要地、作業需要地における電力需給は、以下のようにまとめられる。

- 手順 1: 仮の電力収支$\Delta_\mathrm{tmp}$を計算する。
<p>$\Delta_\mathrm{tmp, t} = \Delta_\mathrm{PV, t}^\mathrm{actual} - \Delta_\mathrm{demand, t}^\mathrm{actual} + \Delta^\mathrm{EV}_{\mathrm{discharge}, t} - \Delta^\mathrm{EV}_{\mathrm{charge}, t} + \Delta^\mathrm{work}_{\mathrm{discharge}, t} - \Delta^\mathrm{work}_{\mathrm{charge}, t} \textcolor{red}{+ \Delta^\mathrm{FE}_{t}}$</p>
ここで、各変数は以下の通りである：
-   - $\Delta_\mathrm{PV, t}^\mathrm{actual}$ : 時刻$t$における該当地点でのPV発電量である。ナノグリッド以外の地点ではPV発電量は常に0である。
-   - $\Delta_\mathrm{demand, t}^\mathrm{actual}$ : 時刻$t$における該当地点での電力需要量である。電力需要地以外の地点では電力需要量は常に0である。
-   - $\Delta^\mathrm{EV}_{\mathrm{discharge}, t}$ : 時刻$t$における該当地点での総EV放電量である。
-   - $\Delta^\mathrm{EV}_{\mathrm{charge}, t}$ : 時刻$t$における該当地点での総EV充電量である。
-   - $\Delta^\mathrm{work}_{\mathrm{discharge}, t}$ : 時刻$t$における総作業機械放電量である。
-   - $\Delta^\mathrm{work}_{\mathrm{charge}, t}$ : 時刻$t$における総作業機械充電量である。
-   - &lt;font color="red"&gt;$\Delta^\mathrm{FE}_{t}$ :&lt;/font&gt;&lt;font color="red"&gt;時刻$t$における該当地点でのFEの発電量である。&lt;/font&gt;
-   - 以下の制約を満たさない場合、その時点で`WA`となる。
&lt;p&gt;$\left\{
\begin{aligned}
&amp;amp; \Delta^\mathrm{EV}_{\mathrm{discharge}, t} + \Delta^\mathrm{work}_{\mathrm{discharge}, t} \leq P^\mathrm{EVC}_\mathrm{in} \textcolor{red}{\text{(左辺の} \Delta^\mathrm{FE}_{t} \text{は削除)}} \\
&amp;amp; \Delta^\mathrm{EV}_{\mathrm{charge}, t} + \Delta^\mathrm{work}_{\mathrm{charge}, t} \leq P^\mathrm{EVC}_\mathrm{out}
\end{aligned}\right.$&lt;/p&gt;
-   -   - ここで、$P^\mathrm{EVC}_\mathrm{in}$と$P^\mathrm{EVC}_\mathrm{out}$はそれぞれ該当地点に導入されているEVCの値を参照せよ。ナノグリッドが導入されていない地点では、これらの値は0とみなされる。
- 手順 2-a: 発電量が過剰である場合の処理。
$\Delta_\mathrm{tmp, t} &gt; \min\{P^\mathrm{RB}_{\mathrm{charge}}, \mathrm{Cap}^\mathrm{RB}_\mathrm{total} - \mathrm{Chg}^\mathrm{grid}_t\}$ の場合、次のようにする：
$\Delta_\mathrm{total, t} = \min\{P^\mathrm{RB}_{\mathrm{charge}}, \mathrm{Cap}^\mathrm{RB}_\mathrm{total} - \mathrm{Chg}^\mathrm{grid}_t\}, \quad \mathrm{pw}^\mathrm{excess}_t = \Delta_\mathrm{tmp, t} - \Delta_\mathrm{total, t}, \quad \mathrm{pw}^\mathrm{buy}_t = 0.$
ここで、各変数は以下の通りである：
-   - $P^\mathrm{RB}_{\mathrm{charge}}$ : 該当地点でのバッテリー最大充電速度で、導入されているRBの値を参照する。ナノグリッド以外の地点ではバッテリー充電速度は常に0である。
-   - $\mathrm{Cap}^\mathrm{RB}_\mathrm{total}$ : 該当地点でのバッテリー蓄電容量で、導入されているRBの値の1台あたり容量と導入量の積である。ナノグリッド以外の地点ではバッテリー蓄電容量は常に0である。
-   - $\mathrm{Chg}^\mathrm{grid}_t$ : 時刻$t$における該当地点でのバッテリー蓄電量である。ナノグリッド以外の地点ではバッテリー蓄電量は常に0である。
-   - $\mathrm{pw}^\mathrm{excess}_t$ : 時刻$t$における該当地点での過剰発電量である。&lt;font color="red"&gt; [以下削除]&lt;del&gt;$\Delta_\mathrm{PV, t}^\mathrm{actual} &amp;lt; \mathrm{pw}^\mathrm{excess}_t$ となる場合は`WA`となる。これは、PV出力抑制による対応が追い付かないことを表現している。&lt;/del&gt;&lt;/font&gt;
-   - $\mathrm{pw}^\mathrm{buy}_t$ : 時刻$t$における該当地点で系統から購入する必要がある電力量である。
- 手順 2-b 発電量が不足している場合の処理。
$\Delta_\mathrm{tmp, t} &lt; -\min\{P^\mathrm{RB}_{\mathrm{discharge}}, \mathrm{Chg}^\mathrm{grid}_t\}$
の場合、次のようにする：
<br>
$\Delta_\mathrm{total, t} = -\min\{P^\mathrm{RB}_{\mathrm{discharge}}, \mathrm{Chg}^\mathrm{grid}_t\}, \quad \mathrm{pw}^\mathrm{excess}_t = 0, \quad \mathrm{pw}^\mathrm{buy}_t = \Delta_\mathrm{total, t} - \Delta_\mathrm{tmp, t}.$
<br>
ここで、
<br>
-   - $P^\mathrm{RB}_{\mathrm{discharge}}$ : 該当地点でのバッテリーの最大放電速度で、導入されているRBの値を参照する。ナノグリッド以外の地点ではバッテリー放電速度は常に0である。
- 手順 2-c: 発電量が適度な大きさの場合の処理。
手順2-aと手順2-bの条件を満たさなかった場合、次のようにする。
<br>
$\Delta_\mathrm{total, t} = \Delta_\mathrm{tmp, t}, \quad \mathrm{pw}^\mathrm{excess}_t = 0, \quad \mathrm{pw}^\mathrm{buy}_t = 0.$
- 手順3 蓄電量の更新処理。
<br>
$\Delta_\mathrm{total, t} &lt; 0$の場合
<br>
$\mathrm{Chg}^\mathrm{grid}_{t + 1} = \Delta_\mathrm{total, t} + \mathrm{Chg}^\mathrm{grid}_t$
<br>
$\Delta_\mathrm{total, t} \geq 0$の場合
<br>
$\mathrm{Chg}^\mathrm{grid}_{t + 1} = \eta^\mathrm{RB}\Delta_\mathrm{total, t} + \mathrm{Chg}^\mathrm{grid}_t$
<br>
ここで、
-   - $\eta^\mathrm{RB}$ : 該当地点でバッテリー充電効率である。ナノグリッド以外の地点では1とみなされる。

## 作業

地域には作業需要を持つ地点が存在している。作業需要地の位置、および作業需要の予測値はテストケース開始時に取得可能である。
作業需要は1日内の延べ作業時間と作業可能時間帯の形で指定され、達成することで追加のスコアを取得することができる。作業は一度開始すると一定時間継続して行う必要があり、また、作業に先んじて消費する電力の充電を行う必要がある。
作業機械を制御するためには、[入出力形式3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F3)にて、以下の形式のコマンドを発行する必要がある。

```plain
$\begin{aligned}\mathrm{"Machinery"} & & \mathrm{id} & & \left\{ \mathrm{"break"} \mid \mathrm{"work"} \mid \mathrm{"charge\_from"}\ d \mid \mathrm{"charge\_to"}\ d\right\}\end{aligned}$
```

- $\mathrm{group}$は`Machinery`を指定する必要がある。
- 有効な$\mathrm{id}$は、$1$以上$N_\mathrm{work}$以下である。
- 有効な$\mathrm{command}$とその内容は下記の通り
-   - `break`:  作業を行わない。
-   - `work`:  作業を行う。一旦作業を始めた場合、最小作業時間で指定されたステップ数以上作業を継続する必要があり、さもなくば`WA`である。
-   - `charge_from d`:  作業機械へ$d$だけ充電する。この時、$\Delta^\mathrm{work}_{\mathrm{charge}, t}$には$d$だけ足しこまれるが、$\mathrm{Chg}^\mathrm{work}$の増分は$\eta^\mathrm{work}$を乗じたものになる。
-   - `charge_to d`:  作業機械から$d$だけ放電する。

## 運搬依頼

運搬依頼に基づき、EVは運搬物を出発地点でピックアップし目的地点まで運ぶ。 依頼はオンラインで発生し、各運搬依頼は以下の内部状態を持つ。ここで、全ての変数は整数である。

- 注文ID $\mathrm{id}$: 全ての注文には発生した順番にIDが割り振られる。同じ時刻に発生した注文についてのIDの割り振り順序は規定されない。
- 発生時刻 $\mathrm{ordered}$: 注文が発生した時刻。
- 注文発生地点 $p^\mathrm{order}$: 運搬注文に対し、pickup を行うべき頂点。
- 注文目的地点 $d^\mathrm{order}$: pickup した注文を送り届けるべき頂点。到着後、積み下ろしは自動で行われる。
- 状態 $\mathrm{state}$: 運搬注文の状態。$0$は運搬注文が発生した後、まだどのEVにも積み込まれていないことを示し、$1$は積み込まれた後、まだ目的地には到着していないことを示す。

運搬依頼は発生してから$T_\mathrm{grace}$ステップ以内に受諾、または拒否を通知しなければならない。$T_\mathrm{grace}$ステップ以内に通知が無い場合、注文はキャンセルされ、運搬スコアにペナルティが課せられる。受諾、または拒否を通知するためには、[入出力形式3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F3)にて、以下の形式のコマンドを発行する必要がある。

```plain
$\begin{aligned}\mathrm{"Order"} & & \mathrm{id} & & \{ \mathrm{"accept"} | \mathrm{"reject"}\}\end{aligned}$
```

- $\mathrm{group}$は`Order`を指定する必要がある。
- 有効な$\mathrm{id}$は、コマンド発行時点で$\mathrm{state}$が$0$である運搬依頼のIDである。運搬依頼の情報に係わる入力については[入出力形式3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F3)を参照せよ。
- 有効な$\mathrm{command}$は`accept`か`reject`のどちらか一方である。`accept`は運搬依頼を受理することを表し、`reject`は運搬依頼を拒否することを表す。
- 受諾していない運搬依頼をpickupしようとした場合、`WA`となる。

運搬依頼の内部状態$\mathrm{state}$が表すのは下記の通りである。

- $\mathrm{state} = -2$: 運搬依頼はキャンセルされた。
- $\mathrm{state} = -1$: 運搬依頼は拒否された。
- $\mathrm{state} = 0$: 運搬依頼が発生した。
- $\mathrm{state} = 1$: 運搬依頼が受理された。
- $\mathrm{state} = 2$: 運搬依頼はEVに積み込まれている。
- $\mathrm{state} = 3$: 運搬依頼は目的地に到着した。

以上のうち、$\mathrm{state} = 0, 1, 2$である運搬注文が未処理として扱われ、コンテスタントに毎時刻で状態が通知される。$\mathrm{state} = -2, -1$である注文は、始めてその状態になった次の時刻に一度だけ状態が通知される。詳細は[入出力形式3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F3)を参照せよ。

## 車両

コンテスタントは複数のEVを操作し、ナノグリッド間の電力バランス調整や運搬を行う。各車両は以下の内部状態を持つ。

- 蓄電量  $\mathrm{Chg}^\mathrm{EV}(t)$
- 位置  $(u^V, v^V, d^V)$ : 車両が辺$(u^V, v^V)$上に存在し、その現在位置は頂点$u^V$から距離$d^V$であることを示す。

EVを操作するためには、[入出力形式3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F3)にて、以下の形式のコマンドを発行する必要がある。

```plain
$\begin{aligned}\mathrm{"EV"} & & \mathrm{id} & & \left\{ \mathrm{"stay"} \mid \mathrm{"move"} w \mid \mathrm{"pickup"}\ a \mid \mathrm{"charge\_from\_grid"}\ d \mid \mathrm{"charge\_to\_grid"} d \right\}\end{aligned}$
```

- $\mathrm{group}$は`EV`を指定する必要がある。
- 有効な$\mathrm{id}$は、$1$以上$N_\mathrm{EV}$以下である。
- 有効な$\mathrm{command}$とその内容は下記の通り
-   - `stay`: 移動せずにその場にとどまる。この場合、車両の電力は消費されず、環境負荷も発生しない。
-   - `move w`: 頂点`w`に向かって距離1だけ移動する。
-   - `pickup a`: ID が`a`である注文をピックアップする。
-   - `charge_from_grid d`: 現在位置するナノグリッドから、車両へ`d`だけ充電する。
-   - `charge_to_grid d`:  車両から、現在位置するナノグリッドへ`d`だけ充電する。
- 以上の 2 項目による充電・放電の総量はターン毎、グリッド毎に$\Delta_\mathrm{EV}$に集約され、評価される。詳細は[電力需給詳細](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E9%9B%BB%E5%8A%9B%E9%9C%80%E7%B5%A6%E8%A9%B3%E7%B4%B0)を参照せよ。

## 採点方法

最終的なスコア$S$は以下の式で決定される：

$S = \sum_{i = 1}^{N_\mathrm{day}}w_{\mathrm{day}, i}S_i + w_\mathrm{acc}S_\mathrm{acc} - \alpha_\mathrm{cost}\max(0, C_\mathrm{total} - C_\mathrm{init})$

ここで、$S_i$は第$i$日目のスコア、$S_\mathrm{acc}$は災害対応スコア、$w_{\mathrm{day}, i}$は各$S_i$に対する重み付け係数、$w_\mathrm{acc}$は災害対応スコアの重みづけ係数、$C_\mathrm{total}$は設置した設備全体のコスト、$\alpha_\mathrm{cost}$はスコア換算のための係数、$C_\mathrm{init}$は設備配置のための予算額である。$S_i$は以下の計算式で決定される。

$S_i = w_\mathrm{trans}S_\mathrm{trans} + w_\mathrm{ele}S_\mathrm{ele} + w_\mathrm{env}S_\mathrm{env} + w_\mathrm{work}S_\mathrm{work}$

ここで、$S_\mathrm{trans}$は輸送スコア、$S_\mathrm{ele}$は電力スコア、$S_\mathrm{env}$は環境スコア、$S_\mathrm{work}$は作業スコアである。詳細は以下の記述を参照せよ。$w_\mathrm{trans}$、$w_\mathrm{ele}$、$w_\mathrm{env}$、$w_\mathrm{work}$は各スコアの重みづけ係数である。それぞれのスコアは、該当する日のパラメータによるテストで求められる。

### 輸送スコア $S_\mathrm{trans}$

輸送スコア$S_\mathrm{trans}$は以下の式で表される。

$S_\mathrm{trans} = \sum_{i \in \mathcal O^\mathrm{trans}} \max\left(0, \alpha^\mathrm{trans}_\mathrm{fee}\mathrm{dist}_i - \alpha^\mathrm{trans}_\mathrm{penalty}(T_{\mathrm{wait}, i} - T_i)^2\right) - \alpha^\mathrm{trans}_\mathrm{undelivered}N_\mathrm{undelivered} - \alpha^\mathrm{trans}_\mathrm{canceled}N_\mathrm{canceled}$

ただし、$\mathcal O^\mathrm{trans}$はテストケース終了時までに完了した運搬依頼のIDの集合、$T_\mathrm{wait, i}$はID$i$の運搬依頼が発生してから目的地に到着するまでの時間、$T_i$はID$i$の運搬注文の発生地点から目的地点までの最短経路長から計算した最短所要時間である。$\alpha^\mathrm{trans}_\mathrm{fee}$は運賃収入に対応するパラメータであり、$\alpha^\mathrm{trans}_\mathrm{penalty}$は運搬依頼の遅れに対するペナルティに対応する。$N_\mathrm{undelivered}$は受理の通知を出したが$T_\mathrm{max}$迄に運搬が完了しなかった注文の総数である。また、$N_\mathrm{canceled}$ は受理、拒否の通知を出さずにキャンセルされた注文の総数である。

### 電力スコア $S_\mathrm{ele}$

電力スコアは以下の式で表される。

$S_\mathrm{ele} = \alpha^\mathrm{ele}C^\mathrm{balance} - \alpha^\mathrm{ele}_\mathrm{FE}\sum_{t = 0}^{T_\mathrm{max}}\sum_{i = 1}^{N_\mathrm{grid}}L^\mathrm{FE}_{i, t} - \alpha^\mathrm{ele}_\mathrm{buy}\sum_{t = 0}^{T_\mathrm{max}}\sum_{i = 1}^{N_\mathrm{grid}}L^\mathrm{buy}_{i, t}$

$C^\mathrm{balance} = \sum_{i = 1}^{N_\mathrm{EV}} C^{\mathrm{EV}_i}_{t = T_\mathrm{max}} + \sum_{i = 1}^{N_\mathrm{grid}} C^{\mathrm{grid}_i}_{t = T_\mathrm{max}} - \sum_{i = 1}^{N_\mathrm{grid}} C^{\mathrm{grid}_i}_{t = 0} - \sum_{i = 1}^{N_\mathrm{EV}} C^{\mathrm{EV}_i}_{t = 0} - \sum_{i = 1}^{N_\mathrm{EV}}\Delta^\mathrm{EV}_{\mathrm{move}, i}\mathrm{ret}_i$

ただし、第1項の$C^\mathrm{balance}$は全体の電力収支に対応し、$t = T_\mathrm{max}$時点における全EV及び全ナノグリッドの蓄電残量の総和から、初期蓄電量の総和とEVが初期値点へ帰投するために必要な電力量の総和を引いたものである。$L^\mathrm{FE}_{i, t}$と$L^\mathrm{buy}_{i, t}$はそれぞれ、<font color="red">ナノグリッド$i$において時刻$t$でFEの発電に要した燃料の量と、系統から購入した電力である。</font>$\alpha^\mathrm{ele}$、$\alpha^\mathrm{ele}_\mathrm{FE}$および$\alpha^\mathrm{ele}_\mathrm{buy}$は電力スコア換算のための係数である。

電力需要地にナノグリッドを設置しなかった場合、ナノグリッドが設置されなかった電力需要地で消費された電力は全て系統から購入したものとして扱われる。

### 環境スコア $S_\mathrm{env}$

環境スコアは以下の式で表される。

$S_\mathrm{env} = - \alpha^\mathrm{env}_\mathrm{fuel} \sum_{t = 0}^{T_\mathrm{max}} \sum_{i = 1}^{N_\mathrm{grid}} L^\mathrm{FE}_{i, t} - \alpha^\mathrm{env}_\mathrm{buy} \sum_{t = 0}^{T_\mathrm{max}} \sum_{i = 1}^{N_\mathrm{grid}} L^\mathrm{buy}_{i, t}$

ただし、$\alpha^\mathrm{env}_\mathrm{fuel}$および$\alpha^\mathrm{env}_\mathrm{grid}$は環境負荷換算のための係数である。

### 災害対応スコア $S_\mathrm{acc}$

災害対応スコアは以下の式で表される。

$S_\mathrm{acc} = \alpha^\mathrm{acc}\mathrm{Day}$

ただし、$\mathrm{Day}$は災害時における連続無停電日数であり、最大で$N_\mathrm{acc}$となる。$\alpha^\mathrm{acc}$はスコア換算のための係数である。詳細は以下の折り畳みを参照せよ。

災害対応スコアは以下のようにして計算される。

1. テストケース内の1日が一様ランダムで選択され、コンテスタントの指定した初期蓄電量からテストが開始される。
2. $\{1, \cdots , T^\mathrm{max}\}$から一様ランダムに1点が選択され、その時刻が災害発生時刻$t_\mathrm{acc}$となり、1.で実行したテスト中での時刻$t_\mathrm{acc}$における蓄電量が記録される。
3. 新たにテストが開始される。初期蓄電量は2.で記録した蓄電量となり、以降、系統からの電力供給を受けずに無停電動作を行う限り、また先述の最大連続無停電日数の範囲でテストが続行される。この間、2日目以降の初期蓄電量は前日の最終蓄電量が使用される。また、避難所の位置に電力需要地が出現する。詳細は[入出力形式1](#入出力形式1)の避難所情報(`shelter`)を参照せよ。加えて、これらのテストの間、運搬注文は発生しない。
4. 上記の災害対応テストは最大$N_\mathrm{acc}$日間で終了する。

### 作業スコア

作業スコアは以下の式で表される。

$S_\mathrm{work} = \alpha^\mathrm{work}\mathrm{Work}$

ただし、$\mathrm{Work}$は作業需要を達成した作業需要地の数である。$\alpha^\mathrm{work}$はスコア換算のための係数である。

### <font color="red">最終順位決定方法</font>

<font color="red">システムテストでは、コンテスト期間中とは異なる400個のテストケースを用いて、その合計点で最終順位を決定する。各コンテスタントでシステムテストの対象となるコードは"ACを獲得した最後の提出"となる。また、TLEもしくはWAとなったテストケースが存在した場合、そのケースの得点は0点になる。テストケースの詳細な内訳は下記表を参照せよ。<br>
※generatorの配布予定は無し。</font>

![](https://img.atcoder.jp/hokudai-hitachi2021/1b22d564a45044632b4720164a2186b5.png)

<font color="red">(1)ツールキット公開済4種＋未公開2種</font><br>
<font color="red">(2)実データから日射量多め×1,少なめ×1,乱択×2の合計4種</font><br>
<font color="red">(3)運搬数の合計の期待値は地図データと一対一対応とする</font><br>
<font color="red">(4)但し、期間中順位用のテストケースと比較して、計算時間・メモリ消費量が極端に大きくなるケースは除外する</font><br>
<font color="red">(5)地図6種 × 日射量4種 × 予算額3種 × 他パラメタパターン4種 = 288ケース</font><br>
<font color="red">(6)将来的な技術動向や政策動向を考慮し、特定のアセットや条件などが有利になるケースを含むように選択<br>**(例: 系統から電力を購入することによるペナルティ($\alpha^\mathrm{ele}_\mathrm{buy}$や$\alpha^\mathrm{env}_\mathrm{buy}$)が大きいケース、$w_\mathrm{acc}, w_\mathrm{trans}, w_\mathrm{ele}, w_\mathrm{env}, w_\mathrm{work}$のいずれか1つが小さくなるケース)**</font><br>

## クエリ詳細

### 予算情報 (`budget`)

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"budget"}$

$C_\mathrm{init}$

### 説明

- $C_\mathrm{init}$はテストケース毎に指定される予算総額である。

### 時間情報 (`temporal`)

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"temporal"}$

$T_\mathrm{max} \quad T_\mathrm{last} \quad N_\mathrm{div} \quad N_\mathrm{day} \quad N_\mathrm{acc} \quad T_\mathrm{grace}$

### 説明

- $T_\mathrm{max}$は 1 日あたりのステップ数、$T_\mathrm{last}$は 1 日の中で各種注文が発生しうる最終ステップである。
- $T_\mathrm{max}$は均等に$N_\mathrm{div}$個の区間に分割される。気象予測、電力需要パターン、注文予測は、この時間区間のそれぞれで一定の値を取る。
- $N_\mathrm{day}$はテストケースが何日分のデータで構成されるかを示している。
- $N_\mathrm{acc}$は災害対応スコア計算時のテストケースが何日分のデータで構成されるかを示している。
- $T_\mathrm{grace}$は運搬注文がキャンセルされるまでの猶予時間である。

### スコア情報 (`score`)

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"score"}$

$\begin{aligned}& \alpha_\mathrm{cost} \\& w_{\mathrm{day}, 1} & & \cdots & & w_{\mathrm{day}, N_\mathrm{day}} \\& w_\mathrm{trans} & & w_\mathrm{ele} & & w_\mathrm{env} & & w_\mathrm{acc} & & w_\mathrm{work} \\& \alpha^\mathrm{trans}_\mathrm{fee} & & \alpha^\mathrm{trans}_\mathrm{penalty} & & \alpha^\mathrm{trans}_\mathrm{undelivered} & & \alpha^\mathrm{trans}_\mathrm{canceled} \\& \alpha^\mathrm{ele} & & \alpha^\mathrm{ele}_\mathrm{FE} & & \alpha^\mathrm{ele}_\mathrm{buy} \\& \alpha^\mathrm{env}_\mathrm{fuel} & & \alpha^\mathrm{env}_\mathrm{buy} & & \textcolor{red}{\text{(先頭の}\alpha^\mathrm{env}\text{は削除)}} \\& \alpha^\mathrm{acc} \\& \alpha^\mathrm{work} \\\end{aligned}$

### 説明

- 8行の間にスコア計算に用いられる係数が列挙される。これらの係数がどのように用いられるのか、詳細な計算式については[採点方法](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E6%8E%A1%E7%82%B9%E6%96%B9%E6%B3%95)を参照せよ。

### グラフ情報 (`graph`)

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"graph"}$

$\begin{aligned}& V & & E \\ & x_1 & & y_1 & & p_1 & & A_1 & & l_1 \\ & \vdots \\ & x_V & & y_V & & p_V & & A_V & & l_V \\ & u_1 & & v_1 & & d_1 \\ & \vdots \\ & u_E & & v_E & & d_E \\\end{aligned}$

### 説明

- 1 行目の$V$は頂点数、$E$は辺の数。
- 続く$V$行でグラフの頂点が与えられる。$V$行のうち、$i$行目は頂点$i$が座標$(x_i, y_i)$に存在して、人口$p_i$が存在し、取得可能な土地面積が$A_i$であり、取得面積当たり費用が$l_i$であることを示す。また、$i$番目の頂点は頂点番号$i$で参照される。
- 続く$E$行で、グラフの辺が与えられる。$E$行のうち、$i$行目は頂点$u_i$と頂点$v_i$の間に距離$d_i$の辺が存在することを示す。

### 電力需要情報 (`demand`)

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"demand"}$

$N_\mathrm{demand}$

### 説明

- $N_\mathrm{demand}$は電力需要地の数である。

### 電力需要情報詳細 `demand [day] [id]`

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"demand"}\quad d \quad i$

$\begin{aligned}& x & & \sigma_D^2 \\& D^{\rm predict}_1 & & \cdots & & D^{\rm predict}_{N_{\rm div}} \\\end{aligned}$

### 説明

- `d`日目における`i`で指定した電力需要地の電力需要予測を返す。
- 1 行目の$x$は電力需要地が存在する頂点の頂点番号であり、続く$\sigma_D^2$は電力需要予測に対し、ステップごとに生じる誤差の分散である。即ち、電力需要予測に対してステップごとに生じる誤差は平均$0$、分散$\sigma_D^2$の正規分布に従う。
- 続く$1$行に時間区間毎の予測電力需要の値が与えられる。 $N_{\rm div}$個の数値のうち、$i$番目の数値$D^\mathrm{predict}_i$は、時間区間$i$での予測電力需要の値を表す。

### 日射量予測 (`radiation [day] [id]`)

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"radiation"}\quad d \quad i$

$\begin{aligned}& R^{\rm predict}_1 & & \cdots & & R^{\rm predict}_{N_{\rm div}} \\\end{aligned}$

### 説明

- `d`日目における頂点`i`の日照量の予測値を返す。
- $i$番目の数値$R^\mathrm{predict}_i$は、時間区間$i$での予測日照量の値を表す。予測日射量の精度に関して、1日の積算量については概ね正確であるが、各ステップにおける精度は保証されない。

### アセット情報 `asset`

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"asset"}$

$\begin{aligned}& N_\mathrm{PV} \\& N_\mathrm{FE} \\& N_\mathrm{RB} \\& N_\mathrm{EVC} \\& N_V \\\end{aligned}$

### 説明

- 1 行目の$N_\mathrm{PV}$は PV 設備の製品数である。
- 続く 1 行の$N_\mathrm{FE}$は自家発電装置の製品数である。
- 続く 1 行の$N_\mathrm{RB}$は蓄電池の製品数である。
- 続く 1 行の$N_\mathrm{EVC}$は EVC の製品数である。
- 続く 1 行の$N_V$は車両の製品数である。

### PVアセット情報 `asset PV [pv_id]`

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"asset\ PV"}\quad i$

$\begin{aligned}& A^\mathrm{PV} & & C^\mathrm{PV}_{\mathrm{init}} \\\end{aligned}$

### 説明

- 製品`i`の PV 設備に関する情報である。$A^\mathrm{PV}$は発電容量あたりの要求面積、$C^\mathrm{PV}_\mathrm{init}$は発電容量あたりのコストである。
- PVに対して有効な`i`は1以上$N_\mathrm{PV}$以下である。

### FEアセット情報 (`asset FE [fe_id]`)

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"asset\ FE"}\quad i$

$\begin{aligned} & P^\mathrm{FE}_\mathrm{min} & & P^\mathrm{FE}_\mathrm{max} & & \eta^\mathrm{FE}_\mathrm{min} & & \eta^\mathrm{FE}_\mathrm{max} & & C^\mathrm{FE}_\mathrm{init} & & C^\mathrm{FE}_\mathrm{fuel} \end{aligned}$

### 説明

- 製品`i`の自家発電装置に関する情報である。$P^\mathrm{FE}_\mathrm{min}$は運転のための最低出力、$P^\mathrm{FE}_\mathrm{max}$は最大出力、$\eta^\mathrm{FE}_\mathrm{min}$は最低出力時の燃料消費率、$\eta^\mathrm{FE}_\mathrm{max}$は最大出力時の燃料消費率、$C^\mathrm{FE}_\mathrm{init}$は一機あたりの初期コスト<font color="red"><del>、$C^\mathrm{FE}_\mathrm{fuel}$は単位発電量あたりの燃料費</del></font>である。なお、各時刻における燃料消費率$\eta^\mathrm{FE}_t$は、時刻$t$の出力値に応じて、$\eta^\mathrm{FE}_\mathrm{max}$と$\eta^\mathrm{FE}_\mathrm{min}$の間の線形補間で求める。<font color="red">(燃料消費量はFEの発電量$\Delta^\mathrm{FE}_{t}$を用いて、$\Delta^\mathrm{FE}_{t} \times ((\Delta^\mathrm{FE}_{t} - P^\mathrm{FE}_\mathrm{min}) \times (\eta^\mathrm{FE}_\mathrm{max} - \eta^\mathrm{FE}_\mathrm{min}) / (P^\mathrm{FE}_\mathrm{max} - P^\mathrm{FE}_\mathrm{min}) + \eta^\mathrm{FE}_\mathrm{min} ) / 1000$ と計算される。$1/1000$ は単位換算のための係数である。)</font>
- FEに対して有効な`i`は1以上$N_\mathrm{FE}$以下である。
- $P^\mathrm{FE}_\mathrm{min} = P^\mathrm{FE}_\mathrm{max} = \eta^\mathrm{FE}_\mathrm{min} = \eta^\mathrm{FE}_\mathrm{max} = C^\mathrm{FE}_\mathrm{init} = C^\mathrm{FE}_\mathrm{fuel} = 0$の製品が必ず含まれている。FEを配置することを望まない場合はこの製品を選択すること。

### RBアセット情報 (`asset RB [rb_id]`)

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"asset\ RB"}\quad i$

$\begin{aligned} & P^\mathrm{RB}_\mathrm{charge} & & P^\mathrm{RB}_\mathrm{discharge} & & \eta^\mathrm{RB} & & \mathrm{Cap}^\mathrm{RB} & & C^\mathrm{RB}_\mathrm{init} \\\end{aligned}$

### 説明

- 製品`i`の蓄電池に関する情報である。$P^\mathrm{RB}_\mathrm{charge}$は最大充電速度、$P^\mathrm{RB}_\mathrm{discharge}$は最大放電速度、$\eta^\mathrm{RB}$は充電効率、$\mathrm{Cap}^\mathrm{RB}$ は蓄電池容量、$C^\mathrm{RB}_\mathrm{init}$は一機あたりの初期コストである。
- RBに対して有効な`i`は1以上$N_\mathrm{RB}$以下である。

### EVCアセット情報 `asset EVC [EVC_id]`

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"asset\ EVC"}\quad i$

$\begin{aligned}& P^\mathrm{EVC}_\mathrm{in} & & P^\mathrm{EVC}_\mathrm{out} & & C^\mathrm{EVC}_\mathrm{init} \\\end{aligned}$

### 説明

- 製品`i`のEVCに関する情報である。$P^\mathrm{EVC}_{\mathrm{in}}$は最大入力電力、$P^\mathrm{EVC}_{\mathrm{out}}$は最大出力電力、$C^\mathrm{EVC}_{\mathrm{init}}$は初期コストである。
- EVCに対して有効な`i`は1以上$N_\mathrm{EVC}$以下である。
- $P^\mathrm{EVC}_\mathrm{in} = P^\mathrm{EVC}_\mathrm{out} = C^\mathrm{EVC}_\mathrm{init} = 0$の製品が必ず含まれている。EVCを配置することを望まない場合はこの製品を選択すること。

### 車両アセット情報 (`asset vehicle [v_id]`)

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"asset\ vehicle"}\quad i$

$\begin{aligned}& \mathrm{Cap}^V_\mathrm{ele} & & \mathrm{Cap}^V_\mathrm{pop} \\& P^V_{\mathrm{charge}} & & P^V_{\mathrm{discharge}} & & C^V_{\mathrm{init}} & & \Delta^V_{\mathrm{move}} \\\end{aligned}$

### 説明

- 製品`i`の車両に関する情報である。
- 1 行目のうち、$\mathrm{Cap}^V_{\mathrm{ele}, i}$は蓄電池容量、$\mathrm{Cap}^V_{\mathrm{pop}, i}$は車両の定員である。
- 2 行目のうち、$P^V_\mathrm{charge}$は最大充電速度、$P^V_{\mathrm{discharge}, 1}$は最大放電速度、$C^V_{\mathrm{init}, i}$は 1 台あたりの費用、$\Delta^V_{\mathrm{move}, i}$は移動時の消費電力である。
- 車両アセット情報に対して有効な`i`は1以上$N_\mathrm{V}$以下である。

### 運搬依頼情報 (`order [day]`)

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"order"}\quad d$

$\begin{aligned}& o_1 & & \cdots & & o_{N_\mathrm{div}} \\\end{aligned}$

### 説明

- `d`日目の運搬依頼の発生頻度に関する情報である。
- $i$個めの引数$o_i$は時間区間$i$の間に発生する運搬依頼の期待値である。運搬依頼の発生数に関する詳細は[運搬依頼](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#%E9%81%8B%E6%90%AC%E4%BE%9D%E9%A0%BC)を参照せよ。(メモ：運搬依頼情報は母数$o_i$のPoisson分布に従う。)

### 避難所情報 (`shelter`)

### 入出力形式

コンテスタント
ジャッジ

$\mathrm{"shelter"}$

$\begin{aligned}& N_\mathrm{shelter} \\& x^\mathrm{shelter}_1 & & p^\mathrm{shelter}_1 \\& \vdots \\& x^\mathrm{shelter}_{N_\mathrm{shelter}} & & p^\mathrm{shelter}_{N_\mathrm{shelter}} \\& D^\mathrm{shelter}_1 & & \cdots & & D^\mathrm{shelter}_{N_\mathrm{div}} \\\end{aligned}$

### 説明

- 避難所に関する情報である。
- 1行目の$N_\mathrm{shelter}$は避難所の数を示す。
- 続く$N_\mathrm{shelter}$行は避難所の設置位置と想定収容人数である。$i$行目は$i$番目の避難所が頂点$x_i$に位置し、想定収容人数が$p_i$であることを示す。
- 続く1行は、災害発生時に避難所で発生する基準電力需要である。$i$番目の数字$D^\mathrm{shelter}_i$は、時間区間$i$における基準電力需要が$D^\mathrm{shelter}_i$であることを示す。時間区間$i$における避難所$j$の電力需要$D^\mathrm{shelter}_{i, j}$は以下の式で表される(端数切り捨て) :

```plain
$\begin{aligned}D^\mathrm{shelter}_{i, j} = p^\mathrm{shelter}_j * D^\mathrm{shelter}_i / 100\end{aligned}$
```

- 電力需要地と避難所が同じ頂点に位置する場合、災害対応スコア計算時には、電力需要地としての電力需要と避難所としての電力需要を合算したものが該当地点の電力需要となる。

### 作業需要情報 (`work`)

コンテスタント
ジャッジ

$\mathrm{"work"}$

$\begin{aligned}& N_\mathrm{work} \end{aligned}$

### 説明

- $N_\mathrm{work}$は作業需要地の数である。

### 作業需要情報詳細 (`work [day] [id]`)

コンテスタント
ジャッジ

$\mathrm{"work"}\quad d \quad i$

$\begin{aligned}& x & & \Delta^\mathrm{work} & & I^\mathrm{work}_\mathrm{min} & & D^\mathrm{work} \\& \mathrm{Cap}^\mathrm{work}_\mathrm{ele} & & P^\mathrm{work}_\mathrm{charge} & & P^\mathrm{work}_\mathrm{discharge} & & \eta^\mathrm{work} \\& A^{\rm work}_1 & & \cdots & & A^{\rm work}_{N_{\rm div}} \end{aligned}$

### 説明

- `d`日目における`i`で指定した作業需要地の作業需要を返す。
- 1 行目の$x$は作業需要地が存在する頂点の頂点番号であり、続く$\Delta^\mathrm{work}$は1ステップの作業に必要な電力量、$I^\mathrm{work}_\mathrm{min}$は最小連続作業ステップ数、$D^\mathrm{work}$はステップ数で表された作業需要量である。
- 続く1行に作業機械の充放電に係わる情報が与えられる。$\mathrm{Cap}^\mathrm{work}_\mathrm{ele}$は最大蓄電量、<font color="red">$P^\mathrm{work}_\mathrm{charge}$</font>は最大充電速度、<font color="red">$P^\mathrm{work}_\mathrm{discharge}$</font>は最大放電速度、$\eta^\mathrm{work}$は充放電効率である。
- 続く1行に時間区間毎の作業可能性が与えられる。$N_{\rm div}$個の数値のうち、$i$番目の数値$A^\mathrm{work}_i$は、時間区間$i$での作業可能性を示す。$A^\mathrm{work}_i = 0$は時間区間$i$における作業が不可能であり、$A^\mathrm{work}_i = 1$は時間区間$i$における作業が可能であることを示す。
- 一つの頂点に複数の作業需要が設定されている可能性があることに注意せよ。

## 入出力制約

入力で与えられる数値のうち**小数**と記載されているものは小数で与えられ、その他のものは整数で与えられる。

### 入出力形式1

- $40 \leq w_{\mathrm{day}, i} \leq 1000$
- $1000 \leq \alpha_\mathrm{cost} \leq 2000$
- $10000 \leq C_\mathrm{init} \leq 800000$
- $0 \leq w_\mathrm{trans} \leq 1$ [小数]
- $0 \leq w_\mathrm{ele} \leq 1$ [小数]
- $0 \leq w_\mathrm{env} \leq 1$ [小数]
- $0 \leq w_\mathrm{acc} \leq 1$ [小数]
- <font color="red">$0 \leq w_\mathrm{work} \leq 1$ </font>[小数]
- $15 \leq \alpha^\mathrm{trans}_\mathrm{fee} \leq 20$ [小数]
- $0.005 \leq \alpha^\mathrm{trans}_\mathrm{penalty} \leq 0.2$ [小数]
- $50 \leq \alpha^\mathrm{trans}_\mathrm{undelivered} \leq 150$[小数]
- <font color="red"> $500 \leq \alpha^\mathrm{trans}_\mathrm{canceled} \leq 1500$ </font> [小数]
- $0.003 \leq \alpha^\mathrm{ele} \leq 0.015$ [小数]
- <font color="red"> $0.05 \leq \alpha^\mathrm{ele}_\mathrm{FE} \leq 0.07$</font> [小数]
- $0.004 \leq \alpha^\mathrm{ele}_\mathrm{buy} \leq 0.02$ [小数]
- <font color="red"> $10000 \leq \alpha^\mathrm{work} \leq 300000$</font>
- $20 \leq \Delta^\mathrm{EV}_{\mathrm{move}, i} \leq 300$
- <font color="red">$0.008 \leq \alpha^\mathrm{env}_\mathrm{fuel} \leq 0.012$</font> [小数]
- $0.0005 \leq \alpha^\mathrm{env}_\mathrm{buy} \leq 0.0025$ [小数]
- $1000000 \leq \alpha^\mathrm{acc} \leq 8000000$
- $3000 \leq T_\mathrm{max} \leq 10000$
- $2700 \leq T_\mathrm{last} \leq 9000$
- $15 \leq N_\mathrm{div} \leq 30$
- $2 \leq N_\mathrm{day} \leq 16$
- $1 \leq N_\mathrm{acc} \leq 8$
- $150 \leq T_\mathrm{grace} \leq 700$
- $5000 \leq V \leq 20000$
- $5000 \leq E \leq 40000$
- $-60000 \leq x_i \leq 60000 (1 \leq i \leq V)$
- $-60000 \leq y_i \leq 60000 (1 \leq i \leq V)$
- $0 \leq p_i \leq 2000 (1 \leq i \leq V)$
- $1 \leq A_i \leq 5000 (1 \leq i \leq V)$
- $5 \leq l_i \leq 300 (1 \leq i \leq V)$
- $1 \leq u_i \leq V (1 \leq i \leq E)$
- $1 \leq v_i \leq V (1 \leq i \leq E)$
- $1 \leq d_i \leq 300 (1 \leq i \leq E)$
- $0 \leq N_\mathrm{demand} \leq 12$
- $10 \leq \sigma_D^2 \leq 30$
- $0 \leq D^{\rm predict}_i \leq 200 (1 \leq i \leq N_\mathrm{div})$
- $0 \leq R^{\rm predict}_i \leq 10 (1 \leq i \leq N_\mathrm{div})$ [小数]
- $2 \leq N_\mathrm{PV} \leq 3$
- $2 \leq N_\mathrm{FE} \leq 4$
- $2 \leq N_\mathrm{RB} \leq 3$
- $2 \leq N_\mathrm{EVC} \leq 5$
- $3 \leq N_V \leq 4$
- $10 \leq A^\mathrm{PV} \leq 15$
- $50 \leq C^\mathrm{PV}_{\mathrm{init}} \leq 120$
- $0 \leq P^\mathrm{FE}_\mathrm{min} \leq 140$
- $0 \leq P^\mathrm{FE}_\mathrm{max} \leq 500$
- $50 \leq \eta^\mathrm{FE}_\mathrm{min} \leq 600$
- $35 \leq \eta^\mathrm{FE}_\mathrm{max} \leq 400$
- $0 \leq C^\mathrm{FE}_\mathrm{init} \leq 4000$
- $130 \leq C^\mathrm{FE}_\mathrm{fuel} \leq 200$
- $14 \leq P^\mathrm{RB}_\mathrm{charge} \leq 36$
- $20 \leq P^\mathrm{RB}_\mathrm{discharge} \leq 55$
- $80 \leq \eta^\mathrm{RB} \leq 99$
- $8000 \leq \mathrm{Cap}^\mathrm{RB} \leq 100000$
- $250 \leq C^\mathrm{RB}_\mathrm{init} \leq 1000$
- $0 \leq P^\mathrm{EVC}_\mathrm{in} \leq 500$
- $0 \leq P^\mathrm{EVC}_\mathrm{out} \leq 500$
- $0 \leq C^\mathrm{EVC}_\mathrm{init} \leq 2000$
- $40000 \leq \mathrm{Cap}^V_\mathrm{ele} \leq 900000$
- $2 \leq \mathrm{Cap}^V_\mathrm{pop} \leq 50$
- $300 \leq P^V_{\mathrm{charge}} \leq 1200$
- $300 \leq P^V_{\mathrm{discharge}} \leq 1200$
- $1500 \leq C^V_{\mathrm{init}} \leq 8000$
- $20 \leq \Delta^V_{\mathrm{move}} \leq 300$
- $0 \leq o_i \leq 1000 (1 \leq i \leq N_\mathrm{div})$
- $4 \leq N_\mathrm{shelter} \leq 16$
- $1 \leq x^\mathrm{shelter}_i \leq V (1 \leq i \leq N_\mathrm{shelter})$
- $20 \leq p^\mathrm{shelter}_i \leq 800 (1 \leq i \leq N_\mathrm{shelter})$
- $0 \leq D^\mathrm{shelter}_i \leq 12 (1 \leq i \leq N_\mathrm{div})$
- $0 \leq N_\mathrm{work} \leq 16$
- $1 \leq x \leq V$
- $20 \leq \Delta^\mathrm{work} \leq 360$
- $50 \leq I^\mathrm{work}_\mathrm{min} \leq 333$
- $1400 \leq D^\mathrm{work} \leq 6000$
- $43200 \leq \mathrm{Cap}^\mathrm{work}_\mathrm{ele} \leq 186000$
- $55 \leq P^\mathrm{work}_\mathrm{charge} \leq 450$
- $85 \leq P^\mathrm{work}_\mathrm{discharge} \leq 720$
- $80 \leq \eta^\mathrm{work} \leq 99$
- $0 \leq A^{\rm work}_{i} \leq 1 (1 \leq i \leq N_\mathrm{div})$
- $D^\mathrm{work} \leq T_\mathrm{max}\sum_{i = 1}^{N_\mathrm{div}}A^{\rm work}_{i} / N_\mathrm{div}$

### 入出力形式2

- $S_\mathrm{trans}$ [小数]
- $S_\mathrm{ele}$ [小数]
- $S_\mathrm{env}$ [小数]
- $1 \leq x^\mathrm{grid}_\mathrm{pos} \leq V$
- $0 \leq \mathrm{Chg}^\mathrm{grid}_\mathrm{init} \leq \mathrm{Cap}^\mathrm{RB} A^\mathrm{grid}_\mathrm{RB}$
- -   - $\mathrm{Cap}^\mathrm{RB}$ は導入したRBの蓄電池容量、$A^\mathrm{grid}_\mathrm{RB}$はRBの導入量である。

- $1 \leq \mathrm{type}^\mathrm{grid}_\mathrm{PV} \leq N_\mathrm{PV}$
- $0 \leq A^\mathrm{grid}_\mathrm{PV}$
- $1 \leq \mathrm{type}^\mathrm{grid}_\mathrm{FE} \leq N_\mathrm{FE}$
- $1 \leq \mathrm{type}^\mathrm{grid}_\mathrm{RB} \leq N_\mathrm{RB}$
- $0 \leq A^\mathrm{grid}_\mathrm{RB}$
- $1 \leq \mathrm{type}^\mathrm{grid}_\mathrm{EVC} \leq N_\mathrm{EVC}$
- $1 \leq x^\mathrm{EV}_\mathrm{pos} \leq V$
- $1 \leq \mathrm{Chg}^\mathrm{EV}_\mathrm{init} \leq \mathrm{Cap}^V_\mathrm{ele}$
- -   - $\mathrm{Cap}^V_\mathrm{ele}$ は導入したEVの蓄電池容量である。

- $1 \leq \mathrm{type}_\mathrm{EV} \leq N_\mathrm{V}$

### 入出力形式3

- $0 \leq \mathrm{Chg}^\mathrm{grid}_i$
- $\mathrm{pw}^\mathrm{actual}_i$
- $0 \leq \mathrm{pw}^\mathrm{excess}_i$
- $0 \leq \mathrm{pw}^\mathrm{FE}_i$
- $0 \leq \mathrm{pw}^\mathrm{buy}_i$
- $0 \leq \mathrm{Chg}^\mathrm{EV}_i$
- $1 \leq u_i \leq V$
- $1 \leq v_i \leq V$
- $0 \leq \mathrm{dist}_i \leq d$
ここで、$d$はEVが現在位置する辺の長さである。EVがちょうどいずれかの頂点の上に存在する場合、$d = 0$ である。
- $0 \leq N^\mathrm{order}_i \leq N_\mathrm{div}*1000$
- $1 \leq o_{i, N^\mathrm{order}_1} \leq N^\mathrm{order}$
- $0 \leq \mathrm{Chg}^\mathrm{work}_i$
- $1 \leq x^\mathrm{work}_i \leq V$
- $0 \leq W^\mathrm{work}_i$
- $0 \leq w^\mathrm{work}_i$
- $0 \leq N_\mathrm{order} \leq 1000 * N_\mathrm{div}$
- $1 \leq \mathrm{id}_i \leq 1000 * N_\mathrm{div}$
- $1 \leq w_i \leq V$
- $1 \leq z_i \leq V$
- $-2 \leq \mathrm{state}_i \leq 2$
- $0 \leq \mathrm{time}_i \leq T_\mathrm{last}$

## サンプルコードB

問題Bのツールキット一式は[ここ](https://img.atcoder.jp/hokudai-hitachi2021/toolkit_B.zip)からダウンロードできます。このツールキットを用いて、手元の環境でジャッジの実行が可能です。また、ビギナー向けのサンプルコードも用意しています。

- テストケース
- ジャッジプログラム
- サンプルコード