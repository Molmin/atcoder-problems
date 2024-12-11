配点 : $700$ 点

## 問題文

高橋君は建物の中に閉じ込められてしまいました。

この建物は $H$ 行 $W$ 列に並んだ $H \times W$ 個の部屋からなり、上から $i$ 行目、左から $j$ 列目の部屋は $(i,j)$ で表され、その部屋の状態は $A_{i,j}$ で表されています。
$A_{i,j}=$ `#` の場合は、この部屋は閉じられており、$A_{i,j}=$ `.` の場合は、この部屋には自由に出入りできます。
そして、 $A_{i,j}=$ `S` となる部屋が高橋君の今いる部屋です。ただし、高橋君が今いる部屋も自由に出入りできる部屋です。

また、$1$ 行目、$1$ 列目、$H$ 行目、$W$ 列目のいずれかに含まれる部屋は建物の外につながっており、
それ以外の各部屋 $(i,j)$ は $4$ つの部屋 $(i-1,j)$ $,$ $(i+1,j)$ $,$ $(i,j-1)$ $,$ $(i,j+1)$ と隣接しています。

高橋君はこの建物から脱出するために魔法を使うことにしました。一回の魔法で高橋君は以下の操作ができます。

- 高橋君は今いる部屋から隣り合う部屋に移動することを $K$ 回まで繰り返す。ただし、閉じられている部屋には移動することはできない。
- その後、閉じられている部屋を $K$ 個まで選び、それらを開いた状態にする。それらの部屋は以降自由に出入りできるようになる。

ただし、これらの操作では、全く動かなかったり、閉じられている部屋があっても開かなかったりしてもよいです。

高橋君の目標は建物の外につながっている部屋のいずれかにたどり着くことです。そのために必要な魔法の回数の最小値を求めてください。

ただし、はじめに高橋君がいる部屋は建物の外とはつながっていないことが保証されています。

## 制約

- $3 \leq H \leq 800$
- $3 \leq W \leq 800$
- $1 \leq K \leq H \times W$
- $A_{i,j}$ は `#` , `.` , `S` のいずれかである。
- $A_{i,j}=$ `S` となる $(i,j)$ は一意に存在し、$2 \leq i \leq H-1 , 2 \leq j \leq W-1$ を満たす。

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$ $K$
> 
> $A_{1,1}A_{1,2}$...$A_{1,W}$
> 
> :
> 
> $A_{H,1}A_{H,2}$...$A_{H,W}$

## 出力

高橋君が必要な魔法の回数の最小値を出力せよ。

```input1
3 3 3
#.#
#S.
###
```

```output1
1
```

高橋君は最初の魔法で部屋 $(1,2)$ に移動することができるので、$1$ 回の魔法で十分です。

```input2
3 3 3
###
#S#
###
```

```output2
2
```

高橋君は最初の魔法では移動することができないですが、部屋 $(1,2)$ を $1$ 回目の魔法で開けることができます。
そして、次の魔法で部屋 $(1,2)$ に移動することで、$2$ 回の魔法で目標を達成できます。

```input3
7 7 2
#######
#######
##...##
###S###
##.#.##
###.###
#######
```

```output3
2
```