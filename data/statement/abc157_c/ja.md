配点 : $300$ 点

## 問題文

以下の条件を満たす $0$ 以上の整数が存在すれば、それらのうち最小のものを出力してください。そのような整数が存在しなければ、 `-1`と出力してください。

- 十進表記で丁度 $N$ 桁である。($0$ は $1$ 桁の整数とする。その他の整数については、先頭に $0$ をつけた表記は認めない。)
- 左から数えて $s_i$ 桁目は $c_i$ である。$\left(i = 1, 2, \cdots, M\right)$

## 制約

- 入力は全て整数
- $1 \leq N \leq 3$
- $0 \leq M \leq 5$
- $1 \leq s_i \leq N$
- $0 \leq c_i \leq 9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $s_1$ $c_1$
> 
> $\vdots$
> 
> $s_M$ $c_M$

## 出力

答えを出力せよ。

```input1
3 3
1 7
3 2
1 7
```

```output1
702
```

$702$ の左から $1$ 桁目は `7` であり、 $3$ 桁目は `2` ですから、 $702$ は問の条件を満たします。また、 $701$ 以下の非負整数は問の条件を満たしません。

```input2
3 2
2 1
2 3
```

```output2
-1
```

```input3
3 1
1 0
```

```output3
-1
```