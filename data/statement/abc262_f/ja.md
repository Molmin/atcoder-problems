配点 : $500$ 点

## 問題文

$1,2,\ldots,N$ がちょうど $1$ 回ずつ現れる数列 $P = (p_1,p_2,\ldots,p_N)$ が与えられます。<br>
あなたは以下の操作のうち $1$ つを選んで行うことを $0$ 回以上 $K$ 回以下繰り返せます。

- $P$ の項を $1$ つ選び、削除する。
- $P$ の末尾の項を先頭に移動させる。

操作後の $P$ として考えられるもののうち辞書順で最小のものを求めてください。

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq K \leq N-1$
- $1 \leq p_i \leq N$
- $(p_1,p_2,\ldots,p_N)$ には $1,2,\ldots,N$ がちょうど $1$ 回ずつ現れる。
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $p_1$ $p_2$ $\ldots$ $p_N$

## 出力

操作後の $P$ として考えられるもののうち辞書順で最小のものを空白区切りで出力せよ。

```input1
5 3
4 5 2 3 1
```

```output1
1 2 3
```

以下のように操作をすると $P$ は $(1,2,3)$ になります。

- 先頭の項を削除する。これによって $P$ は $(5,2,3,1)$ になる。
- 末尾の項を先頭に移動させる。これによって $P$ は $(1,5,2,3)$ になる。
- 先頭から $2$ 番目の項を削除する。これによって $P$ は $(1,2,3)$ になる。

また、辞書順で $(1,2,3)$ より小さい数列は操作後の $P$ として考えられません。よってこれが答えです。

```input2
3 0
3 2 1
```

```output2
3 2 1
```

操作を $1$ 回も行えない場合があります。

```input3
15 10
12 10 7 2 8 11 9 1 6 14 3 15 13 5 4
```

```output3
1 3 4 7 2 8 11 9
```