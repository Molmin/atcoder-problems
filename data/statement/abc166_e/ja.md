配点: $500$ 点

## 問題文

AtCoder 王国の優秀なエージェントであるあなたは、盗まれた極秘情報が AlDebaran 王国の手に渡ることを阻止するため、取引現場であるパーティに潜入しました。

パーティには $N$ 人の参加者がおり、それぞれ $1$ から $N$ までの番号がついています。参加者 $i$ の身長は $A_i$ です。

あなたは事前の尋問によって、極秘情報を取引するのは以下の条件を満たす $2$ 人組であることを知っています。

- $2$ 人の持つ番号の差の絶対値が、$2$ 人の身長の和に等しい。

$N$ 人の参加者のうちから $2$ 人を選んでペアにする方法は $\frac{N(N-1)}{2}$ 通りありますが、このうち上の条件を満たすペアは何通りあるでしょう？

なお、極秘情報の内容が何であるかはあなたの知るところではありません。

## 制約

- 入力はすべて整数
- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^9\ (1 \leq i \leq N)$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## 出力

条件を満たすペアの個数を出力せよ。

```input1
6
2 3 3 1 3 1
```

```output1
3
```

- $A_1 + A_4 = 3$ なので、参加者 $1, 4$ のペアは条件を満たします。
- $A_2 + A_6 = 4$ なので、参加者 $2, 6$ のペアは条件を満たします。
- $A_4 + A_6 = 2$ なので、参加者 $4, 6$ のペアは条件を満たします。

その他に作れるペアはいずれも条件を満たさないので、$3$ を出力します。

```input2
6
5 2 4 2 8 8
```

```output2
0
```

条件を満たすペアが存在しないので、$0$ を出力します。

```input3
32
3 1 4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 3 8 4 6 2 6 4 3 3 8 3 2 7 9 5
```

```output3
22
```