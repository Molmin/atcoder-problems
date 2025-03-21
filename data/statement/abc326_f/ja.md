配点 : $525$ 点

## 問題文

右向きを $x$ 軸正方向、上向きを $y$ 軸正方向とする座標平面の原点にロボットがいます。ロボットは最初、$x$ 軸正方向を向いています。

$i=1,\ldots,N$ の順に以下の操作を行います：

- ロボットを右回りまたは左回りに $90$ 度回転させる。その後、ロボットは向いている方向に $A_i$ 進む

回転方向を適切に選ぶことで、$N$ 回の操作後にロボットがいる座標を $(X,Y)$ にすることはできますか？

できるならば、各操作において、右回りと左回りのどちらを選べばよいか求めてください。

## 制約

- $1 \leq N \leq 80$
- $1 \leq A_i \leq 10^7$
- $-10^9\leq X,Y \leq 10^9$
- 入力は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $X$ $Y$
> 
> $A_1$ $\ldots$ $A_N$

## 出力

$N$ 回の操作後にロボットがいる座標を $(X,Y)$ にできないとき、`No` と出力せよ。<br>
$N$ 回の操作後にロボットがいる座標を $(X,Y)$ にできるとき、1行目に `Yes` と出力し、2行目に次の条件を満たす長さ $N$ の文字列 $S$ を出力せよ。<br>
条件： $S$ は `L` または `R` のみからなり、$S$ の $i$ 番目の文字が `L` ならば $i$ 回目の操作においてロボットを左回りに、`R` ならばロボットを右回りに回転させることで、$N$ 回の操作後にロボットがいる座標を $(X,Y)$ にできる。

答えが複数ある場合はどれを出力しても正解となる。  

```input1
3 -2 4
3 2 1
```

```output1
Yes
LLR
```

最初ロボットは $(0,0)$ にいて、$x$ 軸正方向を向いています。次の手順により、$N$ 回の操作後にロボットがいる座標を $(X,Y)$ にできます。

- $1$ 回目の操作：ロボットを左に $90$ 度回転させ、$y$ 軸正方向を向かせる。ロボットは向いている方向に $A_1=3$ 進み、ロボットのいる座標は $(0,3)$ となる。
- $2$ 回目の操作：ロボットを左に $90$ 度回転させ、$x$ 軸負方向を向かせる。ロボットは向いている方向に $A_2=2$ 進み、ロボットのいる座標は $(-2,3)$ となる。
- $3$ 回目の操作：ロボットを右に $90$ 度回転させ、$y$ 軸正方向を向かせる。ロボットは向いている方向に $A_3=1$ 進み、ロボットのいる座標は $(-2,4)$ となる。

![図](https://img.atcoder.jp/abc326/79baf4537d56c0df5c5d254e6e7f9616.png)

```input2
1 0 0
1
```

```output2
No
```

```input3
4 0 0
1 1 1 1
```

```output3
Yes
LRRR
```

`LLLL` や `RRRR` などでも正解となります。

```input4
14 2543269 -1705099
3 14 159 2653 58979 323846 2643383 2795028 841971 69399 37510 58 20 9
```

```output4
Yes
LLLLLLLLLRLRRR
```