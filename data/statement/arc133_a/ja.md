配点 : $300$ 点

## 問題文

長さ $N$ の整数列 $A=(A_1,A_2,\cdots,A_N)$ が与えられます．

すぬけくんは今から， $A$ の中から一つ値を選びます．
ここで選んだ値を $x$ とします．
そして，$A$ の要素のうち，$x$ でないものを元の順番を保ったまま並べ，整数列 $a$ を作ります．

$a$ としてありうる数列のうち，辞書順最小のものを求めてください．

## 制約

- $1 \leq N \leq 200000$
- $1 \leq A_i \leq N$
- 入力される値はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## 出力

辞書順最小の $a$ の要素を空白区切りで出力せよ．

```input1
5
2 4 4 1 2
```

```output1
2 1 2
```

例えば，$x=2$ とすると，$a=(4,4,1)$ となります．
また，$x=4$ とすると，$a=(2,1,2)$ となり，これは辞書順最小です．

```input2
3
1 1 1
```

```output2

```

$x=1$ とすると $a$ は空になり，これは明らかに辞書順最小です．
なお，出力に余計な空白や改行が含まれていても構いません．

```input3
5
1 1 2 3 3
```

```output3
1 1 2
```