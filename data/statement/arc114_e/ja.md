配点 : $700$ 点

## 問題文

$H \times W$ のマス目に区切られた長方形の紙があり，このうちちょうど $2$ マスが黒く，残りの部分は白く塗られています．マス目の $i$ 行目，$j$ 列目にあるマスを $(i, j)$ で表すと，黒く塗られているのはマス $(h_1, w_1)$ とマス $(h_2, w_2)$ です．

maroon 君はこれから以下の手順で紙を切断する操作を繰り返します．

- 現在の紙のマス目が $h \times w$ の時，紙の辺に平行でマスの境界を通るような直線には，$(h - 1)$ 本の横線と $(w - 1)$ 本の縦線がある．この中から $1$ 本を一様ランダムに選んで，その直線に沿って紙を $2$ 枚に切断する．このとき，-   - $2$ つの黒いマスが同じ紙に存在するとき，もう片方の紙を捨て，操作を続ける
-   - そうでなければ，操作を終了する

maroon 君が操作を終了するまでに紙を切断する回数の期待値を ${\bmod} 998244353$ で求めてください．

## 注記

求める期待値は必ず有理数になることが証明できます．またこの問題の制約のもとでは，その値を既約分数 $\frac{P}{Q}$ で表した時，$Q \not \equiv 0 \pmod{998244353}$ となることも証明できます．よって，$R \times Q \equiv P \pmod{998244353}, 0 \leq R &lt; 998244353$ を満たす整数 $R$ が一意に定まります．この $R$ を答えてください．

## 制約

- $1 \leq H, W \leq 10^5$
- $H \times W \geq 2$
- $1 \leq h_1, h_2 \leq H$
- $1 \leq w_1, w_2 \leq W$
- $(h_1, w_1) \neq (h_2, w_2)$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる．

> $H$ $W$
> 
> $h_1$ $w_1$ $h_2$ $w_2$

## 出力

maroon 君が操作を終了するまでに紙を切断する回数の期待値を ${\bmod} 998244353$ で出力せよ．

```input1
2 3
2 2 1 1
```

```output1
332748119
```

まず，$1$ 回目の切断で確率 $2/3$ で操作が終了します．残りの $1/3$ については，次の切断で操作が終了します．

よって，紙を切断する回数の期待値は，$1 \times 2/3 + 2 \times 1/3 = 4/3$ です．

```input2
1 5
1 2 1 3
```

```output2
332748120
```

```input3
2 1
2 1 1 1
```

```output3
1
```

操作は $1$ 回の切断で必ず終了します．

```input4
10 10
3 4 5 6
```

```output4
831078040
```