## ストーリー

動物が大好きな高橋社長はAtCoder社のオフィスでペットを何匹も放し飼いにしている。
AtCoder社の社員たちはペットに邪魔されて仕事に集中できないことに困っており、オフィスに仕切りを設置してペットの入ってこないスペースを確保することにした。
出来るだけ広いスペースを確保してほしい。

## 問題文

$30 \times 30$ マスからなる部屋の中に、$N$ 匹のペットと $M$ 人の人間が居る。
各マスは初期状態で全て通行可能であり、$30 \times 30$ マスの外部は全て通行不能である。
上から $x$ 行目($1\leq x\leq 30$)、左から $y$ 列目($1\leq y\leq 30$)のマスの座標を $(x, y)$ とする。
以下の処理を $300$ ターン繰り返す。

まず各人の行動をそれぞれ以下の3種類から選択し、同時に動く。

- 何もせずにその場にとどまる。
- 現在位置に隣接するマスを選んで通行不能にする。このターンの開始時点でペットもしくは人が居るマスを選ぶことは出来ない。**隣接するマスにペットが居るマスを選ぶことも出来ない。**既に通行不能なマスを選んだ場合は何もしない。
- 現在位置に隣接する通行可能マスに移動する。このターンの行動で他の人によって通行不能にされるマスに移動することは出来ない。

そのターンの人間の行動が完了後、各ペットが独立に移動する。
ペットの移動規則はペットの種類ごとに異なり、1ターンの間に複数マスの移動をする場合もある。
詳細については後ほど述べる。

既に人やペットが居るマスも通行可能で、同じマスに何体でも重なることが出来る。

## 得点

$300$ ターン終了時点で、各 $i=1,\cdots,M$ について、人 $i$ の最終位置から通行可能マスのみを通って到達可能なマスの集合を $R_i$、
最終位置が $R_i$ に含まれるペットの総数を $n_i$ とする。
このとき、人 $i$ は $s_i=\frac{|R_i|}{900}\times 2^{-n_i}$ の満足度を得る。
テストケースに対して得られる得点は $\mathrm{round}\left(10^8\times\frac{1}{M}\sum_{i=1}^M s_i\right)$ である。

### テストケース数

- 暫定テスト 100個
- システムテスト 2000個、 コンテスト終了後に[seeds.txt](https://img.atcoder.jp/ahc008/seeds.txt) (md5=27bf0702bbe0265900374c3b6b9846b4, sha256=33973e4ded08e3a607fc2e841e14751ff110ae10154b286e7fd5f766ff86d706) を公開

各テストケースの得点の合計が提出の得点となる。
暫定テストでは、一つ以上のテストケースで不正な出力や制限時間超過をした場合、提出全体の判定がWAやTLEとなる。
システムテストでは、不正な出力や制限時間超過をした場合、そのテストケースのみ0点となる。
提出プログラムが異常終了した場合、 RE ではなく WA と判定される可能性があるので注意せよ。

### 実行時間について

実行時間には多少のブレが生じます。
また、システムテストでは同時に大量の実行を行うため、暫定テストに比べて数%程度実行時間が伸びる現象が確認されています。
そのため、実行時間制限ギリギリの提出がシステムテストでTLEとなる可能性があります。
プログラム内で時間を計測して処理を打ち切るか、実行時間に余裕を持たせるようお願いします。

## 入出力

まずはじめに、各ペットの初期位置と種類、各人間の初期位置が以下の形式で標準入力から与えられる。

```plain
$N$
$px_1$ $py_1$ $pt_1$
$\vdots$
$px_N$ $py_N$ $pt_N$
$M$
$hx_1$ $hy_1$
$\vdots$
$hx_M$ $hy_M$
```

$N$ はペットの数を表す $10$ 以上 $20$ 以下の整数値である。
$(px_i,py_i)$ は $i$ 番目のペットの初期位置の座標を表し、$pt_i$ は $i$ 番目のペットの種類を表す $1$ 以上 $5$ 以下の整数値である。
$M$ は人間の数を表す $5$ 以上 $10$ 以下の整数値である。
$(hx_i,hy_i)$ は $i$ 番目の人間の初期位置の座標を表す。
全てのペット・人間の初期位置は異なることが保証されている。

上記の情報を読み込んだら、以下の処理を $300$ 回繰り返す。

まず、各人間の行動を以下のように1文字で表し、$M$ 人の行動を $i$ 文字目が $i$ 番目の人間の行動を表す長さ $M$ の文字列として標準出力に一行で出力せよ。
<font color="red">**出力のあとは標準出力を flush しなければならない。**</font>そうしない場合、TLEとなる可能性がある。

- `.`: 何もしない
- `u`, `d`, `l`, `r`: 現在位置を$(x,y)$としたとき、それぞれ $(x-1,y)$、$(x+1,y)$、$(x,y-1)$、$(x,y+1)$ のマスを通行不能にする。
- `U`, `D`, `L`, `R`: 現在位置を$(x,y)$としたとき、それぞれ $(x-1,y)$、$(x+1,y)$、$(x,y-1)$、$(x,y+1)$ のマスに移動する。

出力後、$N$個の文字列がスペース区切りで標準入力に一行で与えられる。
$i$ 番目の文字列は $i$ 番目のペットのそのターンの移動を表し、そのターンに移動しない場合は `.`、移動する場合は上下左右への1マスの移動をそれぞれ `U`, `D`, `L`, `R` で表して繋げたものである。

[例を見る](https://img.atcoder.jp/ahc008/f828b9475ffb41d54f05619db6ccbd4f.html?lang=ja&amp;show=example)

## ペットの移動規則

基本行動を次のように定義する。
隣接する通行可能マスの中から一様ランダムに選んだマスへ移動する。(通行不能に出来るマスの条件から、そのようなマスは常に存在する)

各ペット $i$ は、種類を表す $1$ 以上 $5$ 以下の整数値 $pt_i$ に応じて、以下のように行動する。

1. ![](https://img.atcoder.jp/ahc008/cow.png) 牛: 基本行動を1回行う。
2. ![](https://img.atcoder.jp/ahc008/pig.png) 豚: 基本行動を2回行う。
3. ![](https://img.atcoder.jp/ahc008/rabbit.png) 兎: 基本行動を3回行う。
4. ![](https://img.atcoder.jp/ahc008/dog.png) 犬: 以下のようにして目的の人に向かって進む。1ターン目は目的無しの状態から開始。現在の目的が無い、現在位置に目的の人が居る、もしくは目的の人への移動経路が存在しない場合は、現在位置から到達可能な人(現在位置に居る人は除く)の中から一様ランダムに一人選ぶ。そのような人が存在しない場合は目的なしの状態になり、基本行動を1回行う。目的の人が居る場合は、目的の人の現在位置への最短距離が短くなる方向(複数ある場合はその中から一様ランダムに選択)へ1マス移動してから基本行動を1回行う。1回目もしくは2回目の移動後に目的地に到達した場合は目的無しの状態に戻す。
5. ![](https://img.atcoder.jp/ahc008/cat.png) 猫: 以下のようにして目的地に向かって進む。1ターン目は目的無しの状態から開始。現在の目的が無い、もしくは目的地への移動経路が存在しない場合は、現在位置から到達可能なマス(現在位置を除く)の中から一様ランダムに目的地を一つ選ぶ。目的地への最短距離が短くなる方向(複数ある場合はその中から一様ランダムに選択)へ1マス移動してから基本行動を1回行う。1回目もしくは2回目の移動後に目的地に到達した場合は目的無しの状態に戻す。

## 入力生成方法

$L$ 以上 $U$ 以下の整数値を一様ランダムに生成する関数を $\mathrm{rand}(L,U)$ で表す。

ペットの数は $N=\mathrm{rand}(10, 20)$ により生成する。
各ペットの初期位置は、まだ選ばれていない座標の中から一様ランダムに選択する。
各ペットの種類は $pt_i=\mathrm{rand}(1, 5)$ により生成する。

人間の数は $M=\mathrm{rand}(5, 10)$ により生成する。
各人間の初期位置は、まだ選ばれていない座標の中から一様ランダムに選択する。

## ツール

- [ローカルテスタ](https://img.atcoder.jp/ahc008/tools_v3.zip): 使用するには[Rust言語](https://www.rust-lang.org/ja)のコンパイル環境をご用意下さい。-   - Rust言語の環境構築が面倒な方向けに、Windows用のコンパイル済みバイナリを用意しました。[tools_x86_64-pc-windows-gnu.zip](https://img.atcoder.jp/ahc008/tools_x86_64-pc-windows-gnu_v3.zip)
-   - &lt;font color="red"&gt;一番最初のものは猫の移動にバグがあったため、コンテスト開始130分時点で修正が入っています。再ダウンロードして下さい。&lt;/font&gt;
-   - READMEの実行例を充実させました。使い方が分からない方は参考にして下さい。また、ルールにあるとおり、提供されたツール類の動かし方に関する情報は自由に共有して構いません。
- [Web版ビジュアライザ](https://img.atcoder.jp/ahc008/f828b9475ffb41d54f05619db6ccbd4f.html?lang=ja): ローカルテスタが生成する出力ファイルの中身をOutput欄に貼り付けることで、実行結果のアニメーション表示が可能です。

<font color="red">コンテスト期間中に、seed=0 に対するビジュアライザの出力画像(pngもしくはgif)のみ twitter で共有が可能です。</font>必ず指定されたハッシュタグを用い、公開アカウントを使用して下さい。(追記)共有出来るのはseed=0に対するビジュアライズ結果と点数のみで、他のシードでの点数や解法や考察に関する言及は禁止です。[共有された画像の一覧](https://twitter.com/search?q=%23AHC008%20%23visualizer&amp;src=typed_query&amp;f=live)

### ツールで用いられる入出力ファイルの仕様

ローカルテスタに与える入力ファイルとして、事前情報である各ペットの初期位置と種類、各人間の初期位置の末尾に、ペットの移動を生成するための乱数シード値を追記したものを用いている。
ペットの移動は人間の行動に依存するため、入力ファイルには乱数シード値のみが記載され、具体的な移動は含まれない。
ローカルテスタは解答プログラムの出力をそのまま出力ファイルに書き出す。
解答プログラムは、`#` から始まるコメント行を出力に含めても良い。
Web版ビジュアライザを使用すると、コメント行が出力されたタイミングで表示されるため、デバッグや考察等に役立てることが出来る。
ジャッジプログラムはコメント行を全て無視するため、コメント行を出力するプログラムをそのまま提出可能である。