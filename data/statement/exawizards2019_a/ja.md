配点 : $100$ 点

## 問題文

$3$ つの整数 $A,B,C$ が与えられます。

三辺の長さがそれぞれ $A,B,C$ であるような正三角形が存在するかどうか判定してください。

## 制約

- 入力は全て整数である。
- $1 \leq A,B,C \leq 100$

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$ $C$

## 出力

三辺の長さが $A,B,C$ であるような正三角形が存在するなら `Yes` を、そうでなければ `No` を出力せよ。

```input1
2 2 2
```

```output1
Yes
```

- 三辺の長さが $2,2,2$ であるような正三角形は存在します。

```input2
3 4 5
```

```output2
No
```

- 三辺の長さが $3,4,5$ であるような正三角形は存在しません。