配点 : $1000$ 点

## 問題文

`1` から `9` までの数字のみで構成された文字列 $S$ が与えられます。
この文字列に、$K$ 個以下のカンマ(`,`)を 挿入し、複数の数に分けたいと思います。

この操作をした際に現れる数の最大値を最小化したとき、その値を出力してください。

## 制約

- $0 \leq K &lt; |S| \leq 100,000$
- $S$ は `1` から `9` までの数字のみからなる。

## 部分点

- $100$ 点分のデータセットでは、$|S| \leq 2$ が成り立つ。
- 別の $100$ 点分のデータセットでは、$|S| \leq 16$ が成り立つ。
- 別の $200$ 点分のデータセットでは、$|S| \leq 100$ が成り立つ。
- 別の $200$ 点分のデータセットでは、$|S| \leq 2,000$ が成り立つ。

## 入力

入力は以下の形式で標準入力から与えられる。

> $K$
> 
> $S$

## 出力

求める整数を $1$ 行で出力しなさい。

```input1
2
15267315
```

```output1
315
```

$152$, $67$, $315$ と区切ると、最大値が $315$ となり、これが答えとなります。

```input2
0
12456174517653111
```

```output2
12456174517653111
```

$12456174517653111$ がそのまま答えとなります。

```input3
8
127356176351764127645176543176531763517635176531278461856198765816581726586715987216581
```

```output3
5317635176
```