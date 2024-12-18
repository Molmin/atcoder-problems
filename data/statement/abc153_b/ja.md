配点 : $200$ 点

## 問題文

アライグマはモンスターと戦っています。

モンスターの体力は $H$ です。

アライグマは $N$ 種類の必殺技を使うことができ、$i$ 番目の必殺技を使うとモンスターの体力を $A_i$ 減らすことができます。
必殺技を使う以外の方法でモンスターの体力を減らすことはできません。

モンスターの体力を $0$ 以下にすればアライグマの勝ちです。

アライグマが同じ必殺技を $2$ 度以上使うことなくモンスターに勝つことができるなら `Yes` を、できないなら `No` を出力してください。

## 制約

- $1 \leq H \leq 10^9$
- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^4$
- 入力中のすべての値は整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## 出力

アライグマが同じ必殺技を $2$ 度以上使うことなくモンスターに勝つことができるなら `Yes` を、できないなら `No` を出力せよ。

```input1
10 3
4 5 6
```

```output1
Yes
```

例えば $2$ 番目と $3$ 番目の必殺技を使うことで、モンスターの体力を $0$ 以下にできます。

```input2
20 3
4 5 6
```

```output2
No
```

```input3
210 5
31 41 59 26 53
```

```output3
Yes
```

```input4
211 5
31 41 59 26 53
```

```output4
No
```