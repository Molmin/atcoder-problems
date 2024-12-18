配点 : $1400$ 点

## 問題文

縦 $H$ 行、横 $W$ 列のマス目があります。
上から $i$ ($1 \leq i \leq H$) 行目、左から $j$ ($1 \leq j \leq W$) 列目のマスの情報は、文字 $a_{ij}$ によって次のように表されます。

- `.` : 空きマスである。
- `o` : ロボットが $1$ 個置かれたマスである。
- `E` : 出口のあるマスである。 `E` はマス目全体にちょうど $1$ 個含まれる。

高橋君は次の操作を何回か行い、できるだけ多くのロボットを救出しようとしています。

- 上下左右のうちどれかひとつの向きを選び、すべてのロボットをその向きへ 1 マスだけ移動させる。 このとき、出口のあるマスへ移動したロボットは直ちに救出され、マス目から消える。 また、マス目の外へ移動したロボットは直ちに爆発し、マス目から消える。

高橋君が救出できるロボットの個数の最大値を求めてください。

## 制約

- $2 \leq H,W \leq 100$
- $a_{ij}$ は `.`，`o`，`E` のどれかである。
- `E` はマス目全体にちょうど $1$ 個含まれる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$
> 
> $a_{11}$$...$$a_{1W}$
> 
> $:$
> 
> $a_{H1}$$...$$a_{HW}$

## 出力

高橋君が救出できるロボットの個数の最大値を出力せよ。

```input1
3 3
o.o
.Eo
ooo
```

```output1
3
```

例えば、左、上、右の順にロボットを移動させればよいです。

```input2
2 2
E.
..
```

```output2
0
```

```input3
3 4
o...
o...
oooE
```

```output3
5
```

右、右、右、下、下の順にロボットを移動させればよいです。

```input4
5 11
ooo.ooo.ooo
o.o.o...o..
ooo.oE..o..
o.o.o.o.o..
o.o.ooo.ooo
```

```output4
12
```