配点: $600$ 点

## 問題文

無限に広がる草原があります。

この草原上に、大きさが無視できるほど小さい $1$ 頭の牛がいます。牛の今いる点から南に $x\ \mathrm{cm}$、東に $y\ \mathrm{cm}$ 移動した点を $(x, y)$ と表します。牛自身のいる点は $(0, 0)$ です。

また、草原には $N$ 本の縦線と $M$ 本の横線が引かれています。$i$ 本目の縦線は点 $(A_i, C_i)$ と点 $(B_i, C_i)$ とを結ぶ線分、$j$ 本目の横線は点 $(D_j, E_j)$ と点 $(D_j, F_j)$ とを結ぶ線分です。

牛が線分を(端点を含め)通らない限り自由に動き回れるとき、牛が動き回れる範囲の面積は何 $\mathrm{cm^2}$ でしょうか。この範囲の面積が無限大である場合は代わりに `INF` と出力してください。

## 制約

- 入力はすべて $-10^9$ 以上 $10^9$ 以下の整数
- $1 \leq N, M \leq 1000$
- $A_i &lt; B_i\ (1 \leq i \leq N)$
- $E_j &lt; F_j\ (1 \leq j \leq M)$
- 点 $(0, 0)$ はどの与えられた線分上にも位置しない

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $B_1$ $C_1$
> 
> $:$
> 
> $A_N$ $B_N$ $C_N$
> 
> $D_1$ $E_1$ $F_1$
> 
> $:$
> 
> $D_M$ $E_M$ $F_M$

## 出力

牛が動き回れる範囲の面積が無限大ならば `INF` を、そうでなければその面積を表す整数 (単位: $\mathrm{cm^2}$) を出力せよ。

(この問題の制約下で、牛が動き回れる範囲の面積が有限である場合、その面積は必ず整数であることが示せる。)

```input1
5 6
1 2 0
0 1 1
0 2 2
-3 4 -1
-2 6 3
1 0 1
0 1 2
2 0 2
-1 -4 5
3 -2 4
1 2 4
```

```output1
13
```

牛が動き回れる範囲の面積は $13\ \mathrm{cm^2}$ です。

![Sample 1](https://img.atcoder.jp/abc168/education.png)

```input2
6 1
-3 -1 -2
-3 -1 1
-2 -1 2
1 4 -2
1 4 -1
1 4 1
3 1 4
```

```output2
INF
```

牛が動き回れる範囲の面積は無限大です。