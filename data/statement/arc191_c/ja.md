配点 : $600$ 点

## 問題文

$1$ 以上 $10^9$ 以下の正整数 $N$ が与えられます。

以下の条件を共に満たす正整数の組 $(A,M)$ を一つ求めてください。ただし、制約下でそのような正整数の組が必ず存在することが証明できます。

- $A,M$ はどちらも $1$ 以上 $10^{18}$ 以下の正整数である。
- $A^n-1$ が $M$ の倍数となるような正整数 $n$ が存在し、その最小値は $N$ である。

$T$ 個のテストケースが与えられるので、それぞれについて答えを求めてください。

## 制約

- $1\le T\le 10^4$
- $1\le N\le 10^9$
- 入力される値は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $T$
> 
> $\text{case}_1$
> 
> $\text{case}_2$
> 
> $\vdots$
> 
> $\text{case}_T$

ここで、 $\text{case}_i$ は $i$ 番目のテストケースを意味する。

各テストケースは以下の形式で与えられる。

> $N$

## 出力

それぞれのケースについて、条件を満たす正整数の組 $(A,M)$ を以下の形式で出力せよ。

> $A$ $M$

条件を満たす解が複数存在する場合、どれを出力しても正解とみなされる。

```input1
4
3
16
1
55
```

```output1
2 7
11 68
20250126 1
33 662
```

$\text{case}_1$ について考えます。

例えば $(A,M)=(2,7)$ とすると

- $n=1$ のとき： $2^1-1=1$ は $7$ の倍数ではない。
- $n=2$ のとき： $2^2-1=3$ は $7$ の倍数ではない。
- $n=3$ のとき： $2^3-1=7$ は $7$ の倍数である。

となり、条件を満たす最小の $n$ は $3$ になることが確認できます。したがって、 $(A,M)=(2,7)$ を出力すると正答となります。
この他にも、例えば $(A,M)=(100,777)$ などが条件を満たします。