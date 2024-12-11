配点 : $1000$ 点

## 問題文

整数 $A,B,V,M$ が与えられます．
ここで，$A$ と $B$ は互いに素であることが保証されます．
また，あなたは整数 $x$ を持っています．
最初，$x=V$ です．

あなたは，以下の $4$ 種類の操作を好きな順序で好きな回数繰り返すことができます．

- <p>$x$ の値を，$x+A$ で置き換える．</p>
- <p>$x$ の値を，$x-A$ で置き換える．</p>
- <p>$x$ の値を，$x+B$ で置き換える．</p>
- <p>$x$ の値を，$x-B$ で置き換える．</p>

ただし，操作のどの瞬間においても，$0 \leq x \leq M$ が成立している必要があります．

この条件の元で，$x$ がとりうる値が何種類あるかを求めてください．

一つの入力ファイルにつき，$T$ 個のテストケースを解いてください．

## 制約

- $1 \leq T \leq 10^5$
- $1 \leq A &lt; B \leq M \leq 10^9$
- $A$ と $B$ は互いに素である．
- $0 \leq V \leq M$
- 入力される値はすべて整数である．

## 入力

入力は以下の形式で標準入力から与えられる．

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_3$

各ケースは以下の形式で与えられる．

> $A$ $B$ $V$ $M$

## 出力

各ケースについて答えを出力せよ．

```input1
5
3 5 0 5
1 2 5 10
5 8 4 9
10 99 48 106
500000000 500000001 123456789 900000000
```

```output1
4
11
4
10
800000002
```

$1$ つ目のテストケースでは，$x=0,2,3,5$ の $4$ 通りの値が考えられます．