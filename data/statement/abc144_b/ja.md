配点 : $200$ 点

## 問題文

高橋君は九九を覚えたので、$1$ 以上 $9$ 以下の $2$ つの整数の積を計算することができます。

整数 $N$ が与えられるので、$N$ を $1$ 以上 $9$ 以下の $2$ つの整数の積として表すことができるか判定し、できるなら `Yes` を、できないなら `No` を出力して下さい。

## 制約

- $1 \leq N \leq 100$
- $N$ は整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

$N$ を $1$ 以上 $9$ 以下の $2$ つの整数の積として表すことができるなら `Yes` を、できないなら `No` を出力せよ。

```input1
10
```

```output1
Yes
```

例えば $2 \times 5$ と表すことができます。

```input2
50
```

```output2
No
```

$50$ を $1$ 以上 $9$ 以下の $2$ つの整数の積として表すことはできません。

```input3
81
```

```output3
Yes
```