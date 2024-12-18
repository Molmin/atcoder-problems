配点 : $200$ 点

## 問題文

数字のみからなる長さ $6$ の文字列が $N$ 個与えられます。$i \, (i = 1, 2, \dots, N)$ 番目のものを $S_i$ と表します。

さらに、数字のみからなる長さ $3$ の文字列が $M$ 個与えられます。$j \, (j = 1, 2, \dots, M)$ 番目のものを $T_j$ と表します。

$S_1, S_2, \dots, S_N$ のうち、末尾 $3$ 文字が $T_1, T_2, \dots, T_M$ のいずれかに一致するものの個数を求めてください。

## 制約

- $1 \leq N, M \leq 1000$
- $N, M$ は整数
- 全ての $i = 1, 2, \dots, N$ に対し、$S_i$ は数字のみからなる長さ $6$ の文字列
- 全ての $j = 1, 2, \dots, M$ に対し、$T_j$ は数字のみからなる長さ $3$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$
> 
> $T_1$
> 
> $T_2$
> 
> $\vdots$
> 
> $T_M$

## 出力

答えを出力せよ。

```input1
3 3
142857
004159
071028
159
287
857
```

```output1
2
```

$S_1$ の末尾 $3$ 文字は `857` であり、これは $T_3$ に一致します。<br>
$S_2$ の末尾 $3$ 文字は `159` であり、これは $T_1$ に一致します。<br>
$S_3$ の末尾 $3$ 文字は `028` であり、これは $T_1, T_2, T_3$ のいずれにも一致しません。

以上から、答えは $2$ です。

```input2
5 4
235983
109467
823476
592801
000333
333
108
467
983
```

```output2
3
```

```input3
4 4
000000
123456
987111
000000
000
111
999
111
```

```output3
3
```