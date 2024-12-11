配点 : $525$ 点

## 問題文

整数 $K$ が与えられます。はじめ空である集合 $S$ に対して、次の $2$ 種類のクエリを順に $Q$ 個処理してください。

- `1 x`：整数 $x$ が与えられる。$S$ に $x$ が含まれているならば、$S$ から $x$ を取り除く。そうでないならば、$S$ に $x$ を追加する。
- `2 x`：$S$ に含まれる整数 $x$ が与えられる。$S$ に含まれる数を頂点とし、差の絶対値が $K$ 以下であるような数の間に辺を張ったグラフにおいて、$x$ が属する連結成分の頂点数を出力する。

## 制約

- $1 \leq Q \leq 2\times 10^5$
- $0 \leq K \leq 10^{18}$
- 各クエリにおいて、$1\leq x \leq 10^{18}$
- $2$ 種類目のクエリにおいて与えられる $x$ はその時点で $S$ に含まれる。
- 入力は全て整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $Q$ $K$
> 
> $\mathrm{query}_1$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

各クエリはそれぞれ次の形式で与えられる。

> $1$ $x$
> $2$ $x$

## 出力

クエリを処理せよ。

```input1
7 5
1 3
1 10
2 3
1 7
2 3
1 10
2 3
```

```output1
1
3
2
```

クエリの処理は次のように進行します。

- $1$ 番目のクエリでは、$S$ に $3$ が追加され、$S=\{3\}$ となります。
- $2$ 番目のクエリでは、$S$ に $10$ が追加され、$S=\{3,10\}$ となります。
- $3$ 番目のクエリでは、$3,10$ の $2$ 頂点からなる辺のないグラフを考え、$3$ が属する連結成分のサイズである $1$ を出力します。
- $4$ 番目のクエリでは、$S$ に $7$ が追加され、$S=\{3,7,10\}$ となります。
- $5$ 番目のクエリでは、$3,7,10$ の $3$ 頂点からなり、$3$ と $7$、$7$ と $10$ の間に辺のあるグラフを考え、$3$ が属する連結成分のサイズである $3$ を出力します。
- $6$ 番目のクエリでは、$S$ から $10$ が削除され、$S=\{3,7\}$ となります。
- $7$ 番目のクエリでは、$3,7$ の $2$ 頂点からなり、$3$ と $7$ の間に辺のあるグラフを考え、$3$ が属する連結成分のサイズである $2$ を出力します。

```input2
11 1000000000000000000
1 1
1 100
1 10000
1 1000000
1 100000000
1 10000000000
1 1000000000000
1 100000000000000
1 10000000000000000
1 1000000000000000000
2 1
```

```output2
10
```

```input3
8 0
1 1
1 2
2 1
1 1
1 2
1 1
1 2
2 1
```

```output3
1
1
```