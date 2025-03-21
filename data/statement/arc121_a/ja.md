配点 : $400$ 点

## 問題文

$2$ 次元平面上に $1$ から $N$ の番号がついた $N$ 軒の家があります。
家 $i$ は $(x_i,y_i)$ にあります。

家同士の距離はチェビシェフ距離で定められます。
すなわち、家 $i,j$ 間の距離は $\max(|x_i - x_j|, |y_i-y_j|)$ です。

異なる $2$ つの家の組は $\frac{N(N-1)}{2}$ 通りあります。異なる家の組それぞれについて家同士の距離を計算し、距離の値を **降順** に並べて長さ $\frac{N(N-1)}{2}$ の数列を作ります。この数列の先頭から $2$ 番目の値を求めてください。

## 制約

- 与えられる入力は全て整数
- $3 \leq N \leq 2 \times 10^{5}$
- $-10^{9} \leq x_i, y_i \leq 10^{9}$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $x_{1}$ $y_{1}$
> 
> $\vdots$
> 
> $x_{N}$ $y_{N}$

## 出力

異なる家の組全てについて家同士の距離を計算し、降順に並べて数列を作ったときの先頭から $2$ 番目の値を出力せよ。

```input1
3
0 0
1 2
4 0
```

```output1
3
```

- 家 $1,2$ 間の距離は $2$ です。
- 家 $1,3$ 間の距離は $4$ です。
- 家 $2,3$ 間の距離は $3$ です。
- これらを降順に並べて作られる数列は $(4,3,2)$ です。先頭から $2$ 番目に現れる数は $3$ です。

```input2
4
0 0
0 0
1 0
0 1
```

```output2
1
```

- 家は同じ座標に存在することもあります。

```input3
20
407 361
167 433
756 388
-551 -47
306 -471
36 928
338 -355
911 852
288 70
-961 -769
-668 -386
-690 -378
182 -609
-677 401
-458 -112
184 -131
-243 888
-163 471
-11 997
119 544
```

```output3
1766
```