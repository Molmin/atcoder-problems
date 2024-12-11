配点 : $400$ 点

## 問題文

正整数 $N$, $M$, $K$ が与えられます。ここで、$N$ と $M$ は異なります。<br>
正の整数であって、$N$ と $M$ のうち **ちょうど一方のみ** で割り切れる数のうち小さい方から $K$ 番目のものを出力してください。

## 制約

- $1\leq N, M\leq 10^8$
- $1\leq K\leq 10^{10}$
- $N\neq M$
- $N$, $M$, $K$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $K$

## 出力

$N$ と $M$ のうちちょうど一方のみで割り切れる正整数のうち小さい方から $K$ 番目のものを出力せよ。

```input1
2 3 5
```

```output1
9
```

$2$ と $3$ のうちちょうど一方のみで割り切れる正整数は小さい方から順に $2,3,4,8,9,10,\ldots$ です。<br>
ここで、$6$ は $2$ と $3$ の両方で割り切れるため条件をみたさないことに注意してください。<br>
条件をみたす正整数のうち小さい方から $5$ 番目の数は $9$ であるため、$9$ を出力します。  

```input2
1 2 3
```

```output2
5
```

条件をみたす数は小さい方から順に $1,3,5,7,\ldots$ です。

```input3
100000000 99999999 10000000000
```

```output3
500000002500000000
```