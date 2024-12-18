配点 : $500$ 点

## 問題文

$N$ 人の幼児が左右一列に並んでおり、左から $i$ 番目の幼児の活発度は $A_i$ です。

あなたは一回だけ、幼児たちを好きな順番に並び替えさせることができます。

はじめ左から $x$ 番目に並んでいた幼児が左から $y$ 番目に移動するとき、うれしさが $A_x \times |x-y|$ だけ生じます。

幼児のうれしさの合計が最大でいくつになるか求めてください。

## 制約

- $2 \leq N \leq 2000$
- $1 \leq A_i \leq 10^9$
- 入力はすべて整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## 出力

幼児のうれしさの合計の最大値を出力せよ。

```input1
4
1 3 4 2
```

```output1
20
```

左から $1$ 番目の幼児を $3$ 番目に、$2$ 番目の幼児を $4$ 番目に、$3$ 番目の幼児を $1$ 番目に、$4$ 番目の幼児を $2$ 番目に並ばせると、うれしさの合計は $1 \times |1-3|+3 \times |2-4|+4 \times |3-1|+2 \times |4-2|=20$ になります。

```input2
6
5 5 6 1 1 1
```

```output2
58
```

```input3
6
8 6 9 1 2 1
```

```output3
85
```