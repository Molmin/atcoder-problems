配点 : $100$ 点

## 問題文

高橋くんは、朝食にご飯、味噌汁、サラダを $1$ 皿ずつ食べます。

高橋くんの家のテーブルは細長いので、 $3$ 皿を横一列に並べました。並べ方は文字列 $S$ によって与えられ、左から $i$ 番目の皿は $S_i$ が `R` ならご飯、 $S_i$ が `M` なら味噌汁、 $S_i$ が `S` ならサラダです。

ご飯の皿が味噌汁の皿より左にあるかどうかを判定してください。

## 制約

- $|S| = 3$
- $S$ には `R` `M` `S` が $1$ 文字ずつ含まれる

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

ご飯の皿が味噌汁の皿より左にあれば `Yes` 、そうでなければ `No` を出力してください。

```input1
RSM
```

```output1
Yes
```

ご飯の皿は左から $1$ 番目にあり、味噌汁の皿は左から $3$ 番目にあります。ご飯の皿の方が左にあるので、 `Yes` を出力します。

```input2
SMR
```

```output2
No
```

左から順に、サラダの皿、味噌汁の皿、ご飯の皿と並んでいます。