配点 : $1100$ 点

## 問題文

A さん、B さん、C さんの $3$ 人が以下のようなカードゲームをプレイしています。

- 最初、$3$ 人はそれぞれ `a`、`b`、`c` いずれかの文字が書かれたカードを、A さんは $N$ 枚、B さんは $M$ 枚、C さんは $K$ 枚持っている。$3$ 人は、持っているカードを並べ替えることはできない。
- A さんのターンから始まる。
- 現在自分のターンである人がカードを $1$ 枚以上持っているならば、そのうち先頭のカードを捨てる。その後、捨てられたカードに書かれているアルファベットと同じ名前の人 (例えば、カードに `a` と書かれていたならば A さん) のターンとなる。
- 現在自分のターンである人がカードを $1$ 枚も持っていないならば、その人がゲームの勝者となり、ゲームは終了する。

$3$ 人が最初に配られるカードに書いてある文字の並びは、全部で $3^{N+M+K}$ 通りの組み合わせがあります。このうち、A さんが勝者となってゲームが終了するのが何通りあるかを求めてください。

答えは大きくなる可能性があるので、$1\,000\,000\,007 (=10^9+7)$ で割った余りを出力してください。

## 制約

- $1 \leq N \leq 3 \times 10^5$
- $1 \leq M \leq 3 \times 10^5$
- $1 \leq K \leq 3 \times 10^5$

## 部分点

- $1 \leq N \leq 1000$、 $1 \leq M \leq 1000$、 $1 \leq K \leq 1000$ を満たすデータセットに正解した場合は、 $500$ 点が与えられる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $K$

## 出力

答えを $1\,000\,000\,007 (=10^9+7)$ で割った余りを出力せよ。

```input1
1 1 1
```

```output1
17
```

- A さんが `a` を持っている場合は、他の $2$ 人の持っているカードに関わらず A さんが勝ちます。これは $3 \times 3=9$ 通りあります。
- A さんが `b` を持っている場合は、B さんが `a` を持っているか、 B さんが `c` を持っていてかつ C さんが `a` を持っている場合に限り A さんが勝ちます。これは $3+1=4$ 通りあります。
- A さんが `c` を持っている場合は、C さんが `a` を持っているか、 C さんが `b` を持っていてかつ B さんが `a` を持っている場合に限り A さんが勝ちます。これは $3+1=4$ 通りあります。

合計すると、 $9+4+4=17$ 通りとなります。

```input2
4 2 2
```

```output2
1227
```

```input3
1000 1000 1000
```

```output3
261790852
```