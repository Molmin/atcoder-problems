配点 : $800$ 点

## 問題文

$1,2,\ldots,N$ の番号のついた $N$ 人の生徒が試験を受けました。人 $i\,(1 \leq i \leq N)$ の点数は $A_i$ でしたが、$B_i$ 点以上取らないと留年です。そこで誰も留年しないように、ある $2$ 人の点数を入れ替える、という操作を任意の回数行うことにしました。

これが可能かを判定し、もし可能ならば一度も点数を入れ替えなかった人数の最大値を求めてください。

## 制約

- $2 \leq N \leq 3 \times 10^5$
- $1 \leq A_i,B_i \leq 10^9\,(1 \leq i \leq N)$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## 出力

誰も留年しないように操作を行うことが可能な場合、一度も点数を入れ替えなかった人数の最大値を出力せよ。

不可能な場合は `-1` を出力せよ。

```input1
3
1 2
3 1
3 3
```

```output1
1
```

人 $1$ と人 $2$ の点数を入れ替えると、誰も留年しません。このとき、一度も点数を入れ替えなかった人は人 $3$ だけなので、$1$ を出力します。

```input2
2
100 1
100 1
```

```output2
2
```

```input3
6
3 2
1 6
4 5
1 3
5 5
9 8
```

```output3
-1
```

```input4
6
3 1
4 5
5 2
2 3
5 4
5 1
```

```output4
3
```