## ストーリー

AtCoder社は頻繁にオンサイトコンテストを開催しており、コンテスト会場を自前で建設することにした。
建設予定地は山の中にあり、まずは地面を平らに整地しなければならない。
整地にはダンプカーを使用し、土砂を積む、降ろす、運ぶそれぞれに対してコストがかかる。
できるだけ少ないコストで整地を行う方法を求めてほしい。

## 問題文

$N \times N$ マスの土地がある。
一番左上のマスの座標を $(0,0)$ とし、そこから下方向に $i$ マス、右方向に $j$ マス進んだ先のマスの座標を $(i,j)$ とする。

各マス $(i,j)$ の高さ $h_{i,j}$ が入力として与えられる。
全てのマスの高さの合計はちょうど $0$ である。

初期状態で $(0,0)$ のマスにダンプカーが空の積荷の状態で停まっている。
毎ターン以下の3種類の操作から1つを選んで行うことができる。

- $0&lt;d\leq 10^6$ を満たす整数 $d$ を指定し、現在位置から $d$ の土砂をダンプカーに積む。この操作により、現在位置の高さは $d$ 減少し、ダンプカーに積まれた土砂が $d$ 増加する。高さは負の値となっても良い。この操作は $d$ のコストが発生する。
- $0&lt;d\leq 10^6$ を満たす整数 $d$ を指定し、ダンプカーから $d$ の土砂を現在位置に降ろす。この操作により、現在位置の高さは $d$ 増加し、ダンプカーに積まれた土砂が $d$ 減少する。$d$ の値は操作前にダンプカーに積まれている量以下でなければならない。この操作は $d$ のコストが発生する。
- 上下左右に隣接するマスへダンプカーを移動させる。$N \times N$ マスの外部へ移動することはできない。ダンプカーに積まれた土砂が $d$ のとき、この操作は $100+d$ のコストが発生する。

操作は最大で $100000$ ターン行うことが出来る。
最終的に全てのマスの高さが $0$ となるような、出来るだけコストの小さい操作列を求めて欲しい。

## 得点

出力した操作列の合計コストを $\mathrm{cost}$ とする。
全ての $(i,j)$ について $|h_{i,j}|$ の和を取ったものを $\mathrm{base}$ とする。
マス $(i,j)$ の最終的な高さを $h_{i,j}'$ としたとき、$h_{i,j}'\neq 0$ であるような全ての $(i,j)$ について $100|h_{i,j}'|+10000$ の和を取ったものを $\mathrm{diff}$ と定義する。
このとき、以下の得点が得られる。

\[
\mathrm{round}\left(10^9\times \frac{\mathrm{base}}{\mathrm{cost}+\mathrm{diff}}\right)
\]

テストケースは全部で 150 個あり、各テストケースの得点の合計が提出の得点となる。
一つ以上のテストケースで不正な出力や制限時間超過をした場合、提出全体の判定がWAやTLEとなる。
コンテスト時間中に得た最高得点で最終順位が決定され、コンテスト終了後のシステムテストは行われない。 同じ得点を複数の参加者が得た場合、提出時刻に関わらず同じ順位となる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $h_{0,0}$ $\cdots$ $h_{0,N-1}$
> 
> $\vdots$
> 
> $h_{N-1,0}$ $\cdots$ $h_{N-1,N-1}$

全てのテストケースで $N = 20$ で固定である。
初期状態におけるマス $(i,j)$ の高さ $h_{i,j}$ は $-100\leq h_{i,j}\leq 100$ を満たす整数値であり、その総和は $0$ となることが保証されている。

## 出力

操作ターン数を $T$ とする。
$t$ ターン目の操作を以下のように文字列 $s_t$ で表す。

- 現在位置から $d$ の土砂をダンプカーに積む操作: `+d`
- ダンプカーから $d$ の土砂を現在位置に降ろす操作: `-d`
- 隣接するマスへダンプカーを移動させる操作: 上下左右それぞれ `U`、`D`、`L`、`R`

このとき、以下の形式で標準出力に出力せよ。

> $s_0$
> 
> $\vdots$
> 
> $s_{T-1}$

[例を見る](https://img.atcoder.jp/ahc034/vImT4eac.html?lang=ja&amp;seed=0&amp;output=sample)

## 入力生成方法

必ずしも理解する必要はありません。
Web版ビジュアライザのseed値を変えて、どのような入力が生成されるかを眺めることをオススメします。

$L$ 以上 $U$ 以下の整数値を一様ランダムに生成する関数を $\mathrm{rand}(L,U)$ で表す。
乱数シード $\mathrm{seed}$ を元に、$-1$ 以上 $1$ 以下の範囲にスケーリングされた二次元の [Perlin noise](https://ja.wikipedia.org/wiki/%E3%83%91%E3%83%BC%E3%83%AA%E3%83%B3%E3%83%8E%E3%82%A4%E3%82%BA) を生成する関数を 
$\mathrm{noise}(y,x,\mathrm{seed})$ で表す。

まずはじめに、Perlin noise 生成に用いるシード値 $\mathrm{seed}=\mathrm{rand}(0,2^{32}-1)$ を生成する。

次に、各 $(i,j)$ について、$h_{i,j}=\mathrm{round}(\mathrm{noise}(i/10,j/10,\mathrm{seed})\times 50)$ を生成する。
もし全ての $(i,j)$ で $h_{i,j}=0$ であれば、$\mathrm{seed}$ を生成し直す。

$h_{i,j}$ の総和を $S$ とする。
$S=0$ となるよう、以下のようにして変形を行う。

全ての座標 $(0,0),(0,1),\cdots,(N-1,N-1)$ を一様ランダムな順番にシャッフルし、その $k$ 番目の座標を $(i_k,j_k)$ とする。
$S &gt; 0$ ならば、各 $k=0,1,\cdots,S-1$ について、$h_{i_{k\% N^2},j_{k\% N^2}}$ を $1$ 減らす。
$S&lt;0$ ならば、各 $k=0,1,\cdots,-S-1$ について、$h_{i_{k\% N^2},j_{k\% N^2}}$ を $1$ 増やす。

## ツール(入力ジェネレータ・ビジュアライザ)

- [Web版](https://img.atcoder.jp/ahc034/vImT4eac.html?lang=ja): ローカル版より高性能でアニメーション表示が可能です。
- [ローカル版](https://img.atcoder.jp/ahc034/vImT4eac.zip): 使用するには[Rust言語](https://www.rust-lang.org/ja)のコンパイル環境をご用意下さい。-   - [Windows用のコンパイル済みバイナリ](https://img.atcoder.jp/ahc034/vImT4eac_windows.zip): Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。

コンテスト期間中に、ビジュアライズ結果の共有や、解法・考察に関する言及は禁止されています。ご注意下さい。

```input1
20
10 4 0 0 4 10 16 20 21 16 11 2 -7 -16 -23 -25 -23 -16 -7 2
16 10 6 5 7 10 13 15 14 10 4 -4 -13 -21 -29 -32 -29 -22 -13 -3
20 14 10 8 9 10 11 12 10 6 0 -7 -15 -24 -31 -33 -31 -25 -16 -8
20 15 12 10 10 10 10 11 8 5 0 -5 -12 -20 -26 -29 -28 -23 -15 -7
16 13 12 10 10 10 10 10 9 7 4 1 -4 -10 -16 -20 -20 -17 -10 -3
10 10 10 10 11 10 10 10 10 10 10 9 7 2 -3 -8 -9 -8 -3 3
4 7 9 10 10 10 10 10 11 14 16 18 17 14 9 5 1 1 4 9
0 5 8 10 10 10 10 10 12 15 20 24 25 24 19 14 9 7 9 13
0 6 10 12 11 11 9 9 10 14 20 26 29 28 24 18 13 10 10 14
4 10 14 16 13 10 7 5 6 10 16 23 26 26 23 16 10 8 6 10
11 16 20 21 16 10 4 0 0 4 10 16 21 20 16 10 4 0 1 4
16 23 26 24 18 9 1 -4 -7 -4 2 9 12 12 8 3 -3 -6 -7 -3
20 26 27 24 17 7 -3 -11 -14 -12 -7 -1 2 2 -1 -5 -10 -12 -11 -7
20 24 24 20 13 3 -8 -17 -21 -20 -16 -12 -9 -9 -11 -14 -15 -15 -12 -6
16 18 17 14 6 -3 -13 -20 -24 -25 -23 -21 -20 -19 -21 -21 -18 -15 -10 -3
10 10 8 4 -1 -8 -14 -20 -23 -25 -25 -26 -27 -28 -28 -25 -21 -14 -5 3
4 2 -1 -4 -7 -9 -12 -15 -18 -19 -23 -26 -29 -31 -31 -28 -21 -11 -1 8
0 -4 -7 -9 -9 -8 -7 -7 -8 -11 -16 -20 -26 -30 -31 -28 -20 -8 2 12
0 -6 -9 -10 -7 -3 1 3 3 -1 -7 -13 -20 -26 -29 -27 -20 -9 2 13
4 -3 -6 -6 -3 3 9 12 12 9 3 -5 -12 -20 -25 -26 -21 -12 -1 9
```

```output1
+10
R
+4
R
R
R
R
R
R
R
+50
R
R
R
R
-7
D
-13
L
-44
```