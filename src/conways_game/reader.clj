(ns conways-game.reader
  (:require [conways-game.core :as core]))

(defn read-input-file
  [file-path]
  (let [file-content (slurp file-path)]
    ()))

(defn validate-size
  [rows cols user-input]
  (and
    (= (count user-input) rows)
    (reduce (fn [a b] (and a b))
            (map (fn [v] (= (count v) cols)) user-input))))

(defn validate-input
  [user-input]
  (reduce (fn [a b] (and a b))
          (for [row user-input
                c row]
            (condp = c
              \. true
              \* true
              false))))

(defn print-next-position
  [user-input]
  (core/vec-to-string
    (core/get-next-position
      (core/convert-str-to-vec
        (reduce (fn [s t] (str s "\n" t)) user-input)))))

(defn read-user-input
  []
  (let [reader (java.io.BufferedReader. *in*)
        [rows cols] (clojure.string/split (.readLine reader) #"\s+")
        rows (Integer. (re-find #"\d+" rows))
        cols (Integer. (re-find #"\d+" cols))
        user-input (for [r (range rows)] (.readLine reader))]
    (if (and (validate-size rows cols user-input) (validate-input user-input))
      (println (print-next-position user-input))
      "Your grid was malformed! Check the size and it's contents!"
    )))

