配点 : $100$ 点

## 問題文

三次元凸多面体 $P$ に対し，その**展開図**とは，以下を満たす平面上の（重なっても構わない）多角形の集合のことを指します．

- 各多角形は $P$ の面と一対一に対応する
- 辺のいずれかにに沿って折る操作を繰返すことで $P$ を構成することができる．

ただし，辺に沿って折るとは以下の操作です．

- 辺であって，その辺を取り除くと現在の図形が非連結になるものを取る．その辺で定義される直線を中心軸として，現在の図形上でその辺の片側に位置する部分全体を，任意の角度だけ（三次元的に）回転させる．必要なら，座標の完全に一致した頂点や辺を同一視する．

同様に，三次元凸多面体 $P$ の**展開図の展開図**とは，以下を満たす線分の集合のことを指します．

- 各辺は $P$ の展開図の辺と一対一に対応する
- 頂点に沿って折ることを繰返すことで，$P$ の展開図を構成することができる．

ただし，頂点に沿って折るとは以下の操作です．

- 頂点であって，その頂点を取り除くと現在の図形が非連結になるものを取る．その頂点を中心に，現在の図形上でその頂点の特定の側に位置する部分全体を，任意の角度だけ（二次元的に）回転させる．必要なら，座標の完全に一致した頂点を同一視する．

どの四頂点も同一平面上にない，単位球面上の $N$ 点が与えられます．
$i$ 番目の点の座標は $(x_i,y_i,(-1)^{c_i}\sqrt{1-x_i^2-y_i^2})$ です．

与えられた点たちの凸包の展開図の展開図であって，パスであるものが存在するか判定してください．
存在する場合は，そのパスの長さの最大値を求めてください．

## 制約

- $4 \leq N \leq 14$
- $-1\leq x_i,y_i\leq 1$
- $c_i$ は $0$ または $1$
- $x_i^2+y_i^2\leq 1$
- 与えられるどの $2$ 点も相異なる
- 与えられるすべての異なる四点 $p,q,r,s$ に対して，$p,q,r$ が乗っている平面と $s$ の間の距離は $10^{-5}$ 以上

## 入力

入力は以下の形式で標準入力から与えられる．実数は小数点以下 $6$ 桁まで与えられる．

> $N$
> 
> $x_1$ $y_1$ $c_1$
> 
> $\vdots$
> 
> $x_N$ $y_N$ $c_N$

## 出力

与えられた点たちの凸包の展開図の展開図であってパスであるものが存在するなら，答えを出力せよ．
そうでない場合，$-1$ を出力せよ．

真の値との絶対誤差あるいは相対誤差が $10^{-7}$ 以下の場合に正答とみなされる．

```input1
4
0.000000 0.000000 1
0.000000 0.000000 0
1.000000 0.000000 1
0.000000 1.000000 0
```

```output1
13.899494936612
```

たとえば，図のような展開が最適です．

![](https://img.atcoder.jp/DEGwer2023/G_zu.png)

図: 展開の例

```input2
6
-0.322191 -0.852465 0
-0.463288 -0.553583 1
0.378710 -0.346882 1
-0.489727 0.488028 0
-0.731142 0.227066 1
0.254757 -0.899035 0
```

```output2
22.950966056549
```

```input3
8
0.837078 0.492956 1
0.360579 -0.565500 0
-0.367448 -0.492394 1
0.491637 -0.658814 1
-0.505114 -0.538563 1
0.544637 0.592884 1
-0.622207 -0.379934 1
0.402129 0.684158 1
```

```output3
28.879053537910
```

```input4
4
0.800000 0.600000 0
1.000000 0.000000 1
-0.280000 -0.960000 1
0.000000 0.000000 0
```

```output4
13.284042973728
```