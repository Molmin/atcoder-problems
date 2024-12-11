配点 : $600$ 点

## 問題文

二項係数 $\displaystyle \binom{N}{K}$ の正の約数の個数を $998244353$ で割った余りを求めてください。

## 制約

- $1 \leq N \leq 10^{12}$
- $0 \leq K \leq \min(10^6,N)$
- 入力に含まれる値は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$

## 出力

答えを出力せよ。  

```input1
5 2
```

```output1
4
```

$\displaystyle \binom{5}{2}=10$ です。$10$ の正の約数は $1,2,5,10$ の $4$ 個です。

```input2
103 3
```

```output2
8
```

$\displaystyle \binom{103}{3}=176851$ です。$176851$ の正の約数は $8$ 個あります。

```input3
1000000000000 1000000
```

```output3
110520107
```