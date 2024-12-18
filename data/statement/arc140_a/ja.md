配点 : $300$ 点

## 問題文

英小文字からなる文字列 $T$ に対して次の問題を考え、その答えを $f(T)$ とします。

    $T$ の先頭の文字を削除し末尾に追加する操作を任意の回数行うことによって作ることのできる文字列の種類数を求めてください。

英小文字からなる長さ $N$ の文字列 $S$ が与えられます。あなたは以下の操作を $K$ 回以下行うことが出来ます。($1$ 回も行わなくてもよいです。)

- $S$ の文字を $1$ 個選び、任意の英小文字に変更する。

操作終了後の $f(S)$ の値としてあり得る最小値を求めてください。

## 制約

- $1 \le N \le 2000$
- $0 \le K \le N$
- $S$ は英小文字からなる長さ $N$ の文字列である。
- $N,K$ は整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $S$

## 出力

答えを出力せよ。

```input1
4 1
abac
```

```output1
2
```

$1$ 回目の操作で $4$ 文字目を `c` から `b` に変更すると $S=$ `abab` となり、$f(S)=2$ となります。

$f(S)$ を $1$ 回以下の操作で $1$ 以下にすることはできないため、答えは $2$ です。

```input2
10 0
aaaaaaaaaa
```

```output2
1
```

```input3
6 1
abcaba
```

```output3
3
```