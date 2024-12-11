配点 : $400$ 点

## 問題文

円形に $N$ 個の山が連なっており、時計回りに山 $1$, 山 $2$, $\cdots$, 山 $N$ と呼ばれます。$N$ は**奇数**です。

これらの山の間に $N$ 個のダムがあり、ダム $1$, ダム $2$, $\cdots$, ダム $N$ と呼ばれます。ダム $i$ ($1 \leq i \leq N$) は山 $i$ と山 $i+1$ の間にあります (山 $N+1$ は山 $1$ のことを指します)。

山 $i$ ($1 \leq i \leq N$) に $2x$ リットルの雨が降ると、ダム $i-1$ とダム $i$ にそれぞれ $x$ リットルずつ水が溜まります (ダム $0$ はダム $N$ のことを指します)。

ある日、各山に非負の**偶数**リットルの雨が降りました。

その結果、ダム $i$ ($1 \leq i \leq N$) には合計で $A_i$ リットルの水が溜まりました。

各山に降った雨の量を求めてください。この問題の制約下では解が一意に定まることが証明できます。

## 制約

- 入力は全て整数である。
- $3 \leq N \leq 10^5-1$
- $N$ は奇数である。
- $0 \leq A_i \leq 10^9$
- 入力が表す状況は、各山に非負の偶数リットルの雨が降った際に発生しうる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## 出力

山 $1$, 山 $2$, $\cdots$, 山 $N$ に降った雨の量を表す $N$ 個の整数をこの順に出力せよ。

```input1
3
2 2 4
```

```output1
4 0 4
```

山 $1, 2, 3$ に降った雨の量をそれぞれ $4$ リットル, $0$ リットル, $4$ リットルとすると以下のように辻褄が合います。

- ダム $1$ には $\frac{4}{2} + \frac{0}{2} = 2$ リットルの水が溜まります。
- ダム $2$ には $\frac{0}{2} + \frac{4}{2} = 2$ リットルの水が溜まります。
- ダム $3$ には $\frac{4}{2} + \frac{4}{2} = 4$ リットルの水が溜まります。

```input2
5
3 8 7 5 5
```

```output2
2 4 12 2 8
```

```input3
3
1000000000 1000000000 0
```

```output3
0 2000000000 0
```